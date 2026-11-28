'use client';

import { useRef, useState } from 'react';
import { Arrow } from '@/components/Chrome';
import {
  APPLY_STEPS, COURSES, GENDERS, NATIONALITIES, EDUCATION, PROGRAMS, ESSAYS, ESSAY_MAX_WORDS, wordCount,
} from '@/data/apply';

type Status = 'idle' | 'sending' | 'done';

function Field({
  label, name, required, hint, children,
}: { label: string; name: string; required?: boolean; hint?: string; children: React.ReactNode }) {
  return (
    <div className="ap-field">
      <label htmlFor={name}>
        {label}{required && <span className="ap-req" aria-hidden="true"> *</span>}
      </label>
      {children}
      {hint && <p className="ap-hint">{hint}</p>}
    </div>
  );
}

export default function ApplyForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState<'fwd' | 'back'>('fwd');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [education, setEducation] = useState('');
  const [nationality, setNationality] = useState('');
  const [essays, setEssays] = useState<Record<string, string>>({});
  const last = APPLY_STEPS.length - 1;

  const scrollTop = () =>
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  /** Validates only the visible step; focuses and explains the first problem. */
  const stepValid = () => {
    const panel = formRef.current?.querySelector<HTMLElement>(`[data-step="${step}"]`);
    const els = panel?.querySelectorAll<HTMLInputElement>('input, select, textarea') ?? [];
    for (const el of Array.from(els)) {
      if (!el.checkValidity()) { el.reportValidity(); return false; }
    }
    return true;
  };

  const go = (n: number) => {
    setDir(n > step ? 'fwd' : 'back');
    setStep(n);
    setError('');
    scrollTop();
  };

  const next = () => { if (stepValid()) go(step + 1); };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < last) { next(); return; }
    if (!stepValid()) return;
    const fd = new FormData(formRef.current!);
    const payload: Record<string, unknown> = Object.fromEntries(fd.entries());
    payload.agree = fd.get('agree') === 'on';
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || 'Something went wrong. Please try again.');
      setStatus('done');
      scrollTop();
    } catch (err) {
      setStatus('idle');
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  if (status === 'done') {
    return (
      <div className="ap-card ap-success" ref={topRef} role="status">
        <svg className="ap-check" viewBox="0 0 80 80" aria-hidden="true">
          <circle cx="40" cy="40" r="34" />
          <path d="M26 41l10 10 19-21" />
        </svg>
        <p className="section-eyebrow">Application received</p>
        <h2>Thank you. <em>We&rsquo;ll be in touch.</em></h2>
        <p>
          Your application has reached the admissions office. A counsellor will contact you on the
          email and mobile number you shared to schedule the next step.
        </p>
      </div>
    );
  }

  const pct = ((step + 1) / APPLY_STEPS.length) * 100;

  return (
    <div className="ap-card" ref={topRef}>
      <div className="ap-progress" aria-hidden="true"><span style={{ width: `${pct}%` }} /></div>
      <ol className="ap-stepper" aria-label="Application progress">
        {APPLY_STEPS.map((s, i) => (
          <li key={s.key} className={i === step ? 'is-active' : i < step ? 'is-done' : ''} aria-current={i === step ? 'step' : undefined}>
            <button type="button" disabled={i > step} onClick={() => go(i)}>
              <span className="ap-dot">{i < step ? '✓' : i + 1}</span>
              <span className="ap-step-title">{s.title}</span>
            </button>
          </li>
        ))}
      </ol>

      <form ref={formRef} onSubmit={submit} noValidate className={`ap-form dir-${dir}`}>
        {/* Honeypot */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="ap-hp" />

        {/* Step 1 */}
        <fieldset className="ap-panel" data-step="0" hidden={step !== 0}>
          <legend><span>01</span> Personal information</legend>
          <Field label="Course" name="course" required>
            <select id="course" name="course" required defaultValue="">
              <option value="" disabled>Choose a course</option>
              {COURSES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </Field>
          <div className="ap-grid ap-grid-3">
            <Field label="First name" name="fname" required><input id="fname" name="fname" required autoComplete="given-name" maxLength={60} /></Field>
            <Field label="Middle name" name="mname"><input id="mname" name="mname" autoComplete="additional-name" maxLength={60} /></Field>
            <Field label="Last name" name="lname" required><input id="lname" name="lname" required autoComplete="family-name" maxLength={60} /></Field>
          </div>
          <div className="ap-grid ap-grid-3">
            <Field label="Date of birth" name="dob" required>
              <input id="dob" name="dob" type="date" required autoComplete="bday" max={new Date().toISOString().slice(0, 10)} />
            </Field>
            <Field label="Gender" name="gender" required>
              <select id="gender" name="gender" required defaultValue="">
                <option value="" disabled>Select</option>
                {GENDERS.map((g) => <option key={g}>{g}</option>)}
              </select>
            </Field>
            <Field label="Nationality" name="nationalitySel" required>
              <select id="nationalitySel" required defaultValue="" onChange={(e) => setNationality(e.target.value)}>
                <option value="" disabled>Select</option>
                {NATIONALITIES.map((n) => <option key={n}>{n}</option>)}
              </select>
            </Field>
          </div>
          {nationality === 'Other' ? (
            <div className="ap-reveal">
              <Field label="Your nationality" name="nationality" required>
                <input id="nationality" name="nationality" required maxLength={60} />
              </Field>
            </div>
          ) : (
            <input type="hidden" name="nationality" value={nationality} />
          )}
        </fieldset>

        {/* Step 2 */}
        <fieldset className="ap-panel" data-step="1" hidden={step !== 1}>
          <legend><span>02</span> Contact information</legend>
          <Field label="Address" name="address" required><input id="address" name="address" required autoComplete="address-line1" maxLength={200} /></Field>
          <Field label="Street address" name="street" required><input id="street" name="street" required autoComplete="address-line2" maxLength={200} /></Field>
          <div className="ap-grid ap-grid-2">
            <Field label="City" name="city" required><input id="city" name="city" required autoComplete="address-level2" maxLength={80} /></Field>
            <Field label="State / Province" name="state" required><input id="state" name="state" required autoComplete="address-level1" maxLength={80} /></Field>
          </div>
          <div className="ap-grid ap-grid-2">
            <Field label="ZIP / Postal code" name="zip" required><input id="zip" name="zip" required autoComplete="postal-code" inputMode="numeric" maxLength={12} /></Field>
            <Field label="Country" name="country" required><input id="country" name="country" required autoComplete="country-name" maxLength={80} /></Field>
          </div>
          <Field label="Email address" name="email" required><input id="email" name="email" type="email" required autoComplete="email" maxLength={120} /></Field>
          <div className="ap-grid ap-grid-2">
            <Field label="Mobile number" name="mobile" required hint="10 digits">
              <input id="mobile" name="mobile" type="tel" required autoComplete="tel" inputMode="tel" pattern="[0-9+\-\s]{7,15}" title="Enter a valid phone number" maxLength={15} />
            </Field>
            <Field label="Alternate phone" name="altPhone">
              <input id="altPhone" name="altPhone" type="tel" inputMode="tel" maxLength={15} />
            </Field>
          </div>
        </fieldset>

        {/* Step 3 */}
        <fieldset className="ap-panel" data-step="2" hidden={step !== 2}>
          <legend><span>03</span> Academic &amp; professional</legend>
          <Field label="Highest education level completed" name="education" required>
            <select id="education" name="education" required defaultValue="" onChange={(e) => setEducation(e.target.value)}>
              <option value="" disabled>Select</option>
              {EDUCATION.map((o) => <option key={o}>{o}</option>)}
            </select>
          </Field>
          {education.startsWith('Other') && (
            <div className="ap-reveal">
              <Field label="Please specify" name="educationOther"><input id="educationOther" name="educationOther" maxLength={120} /></Field>
            </div>
          )}
          <p className="ap-sub">Last institution attended</p>
          <div className="ap-grid ap-grid-2">
            <Field label="Institution name" name="institution" required><input id="institution" name="institution" required maxLength={160} /></Field>
            <Field label="Location" name="institutionLocation" required><input id="institutionLocation" name="institutionLocation" required maxLength={120} /></Field>
            <Field label="Degree obtained" name="degree" required><input id="degree" name="degree" required maxLength={120} /></Field>
            <Field label="Graduation year" name="gradYear" required>
              <input id="gradYear" name="gradYear" type="number" required min={1970} max={2035} inputMode="numeric" />
            </Field>
          </div>
          <Field label="Program applied for" name="program">
            <select id="program" name="program" defaultValue="">
              <option value="">Select</option>
              {PROGRAMS.map((p) => <option key={p}>{p}</option>)}
            </select>
          </Field>
          <p className="ap-sub">Work experience <em>(if any)</em></p>
          <div className="ap-grid ap-grid-2">
            <Field label="Total years of experience" name="workYears"><input id="workYears" name="workYears" type="number" min={0} max={60} step="0.5" inputMode="decimal" /></Field>
            <Field label="Company name" name="company"><input id="company" name="company" maxLength={120} /></Field>
            <Field label="Job title" name="jobTitle"><input id="jobTitle" name="jobTitle" maxLength={120} /></Field>
            <Field label="Start date" name="jobStart"><input id="jobStart" name="jobStart" type="date" /></Field>
          </div>
          <Field label="Brief description of responsibilities" name="jobDesc">
            <textarea id="jobDesc" name="jobDesc" rows={3} maxLength={1200} />
          </Field>
        </fieldset>

        {/* Step 4 */}
        <fieldset className="ap-panel" data-step="3" hidden={step !== 3}>
          <legend><span>04</span> Statement &amp; declaration</legend>
          {ESSAYS.map((e, i) => {
            const n = wordCount(essays[e.name] ?? '');
            return (
              <Field key={e.name} label={`${i + 1}. ${e.q}`} name={e.name} hint={`Optional · max ${ESSAY_MAX_WORDS} words`}>
                <textarea
                  id={e.name} name={e.name} rows={4}
                  onChange={(ev) => {
                    const v = ev.target.value;
                    ev.target.setCustomValidity(wordCount(v) > ESSAY_MAX_WORDS ? `Please keep this under ${ESSAY_MAX_WORDS} words.` : '');
                    setEssays((s) => ({ ...s, [e.name]: v }));
                  }}
                  aria-invalid={n > ESSAY_MAX_WORDS}
                />
                <span className={`ap-count${n > ESSAY_MAX_WORDS ? ' over' : ''}`}>{n} / {ESSAY_MAX_WORDS}</span>
              </Field>
            );
          })}
          <label className="ap-consent">
            <input type="checkbox" name="agree" required />
            <span>
              I hereby declare that the information provided in this application form is true and accurate to the
              best of my knowledge. I understand that any false information may lead to the rejection of my application.
            </span>
          </label>
          <div className="ap-grid ap-grid-2">
            <Field label="Applicant's full name" name="signName" required><input id="signName" name="signName" required maxLength={160} /></Field>
            <Field label="Date" name="signDate" required>
              <input id="signDate" name="signDate" type="date" required defaultValue={new Date().toISOString().slice(0, 10)} />
            </Field>
          </div>
        </fieldset>

        {error && <p className="ap-error" role="alert">{error}</p>}

        <div className="ap-actions">
          {step > 0 ? (
            <button type="button" className="ap-back" onClick={() => go(step - 1)}>Back</button>
          ) : <span />}
          <button type="submit" className="btn-cta-primary ap-next" disabled={status === 'sending'}>
            {status === 'sending' ? 'Submitting…' : step < last ? 'Continue' : 'Submit application'} <Arrow />
          </button>
        </div>
      </form>
    </div>
  );
}
