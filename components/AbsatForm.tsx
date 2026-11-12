'use client';

import { useState } from 'react';
import { ABSAT } from '@/data/absat';

const STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
  'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
  'Uttarakhand', 'West Bengal',
  'Andaman & Nicobar Islands', 'Chandigarh', 'Dadra & Nagar Haveli and Daman & Diu', 'Delhi',
  'Jammu & Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry',
  'Outside India',
];

type Status = 'idle' | 'sending' | 'done' | 'error';

/**
 * ABSAT registration form — markup per spec §4 (names, autocomplete, required,
 * pattern validation, two separate unticked DPDP consents).
 *
 * Submissions go to /api/absat, which appends a row to the ABSAT Google Sheet
 * (see app/api/absat/route.ts and scripts/google-sheet/absat-apps-script.gs).
 */
export default function AbsatForm() {
  const [status, setStatus] = useState<Status>('idle');
  const email = ABSAT.helpdeskEmail ?? 'info@asmibschool.com';
  const phoneHref = `tel:${ABSAT.helpdeskPhone.replace(/\s/g, '')}`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity() || status === 'sending') return;

    const fd = new FormData(form);
    setStatus('sending');
    try {
      const res = await fetch('/api/absat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: fd.get('full_name'),
          email: fd.get('email'),
          mobile: fd.get('mobile'),
          state: fd.get('state'),
          consent_processing: fd.get('consent_processing') === 'on',
          consent_marketing: fd.get('consent_marketing') === 'on',
          company: fd.get('company'),
          page: window.location.href,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form
      id="absat-register"
      className="absat-form"
      noValidate
      onSubmit={onSubmit}
    >
      {/* Honeypot for bots: hidden from people and screen readers. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />
      <div className="field">
        <label htmlFor="absat-name">Full name (as on graduation marksheet)</label>
        <input id="absat-name" name="full_name" type="text" autoComplete="name" required />
      </div>

      <div className="field">
        <label htmlFor="absat-email">Email address</label>
        <input id="absat-email" name="email" type="email" autoComplete="email" required />
      </div>

      <div className="field">
        <label htmlFor="absat-mobile">Mobile number</label>
        <div className="field-prefixed">
          <span className="field-prefix" aria-hidden="true">+91</span>
          <input
            id="absat-mobile"
            name="mobile"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            pattern="[6-9][0-9]{9}"
            maxLength={10}
            aria-describedby="absat-mobile-hint"
            required
          />
        </div>
        <p className="field-hint" id="absat-mobile-hint">
          10-digit number. Outside India? Contact the helpdesk.
        </p>
      </div>

      <div className="field">
        <label htmlFor="absat-state">State of residence</label>
        <select id="absat-state" name="state" autoComplete="address-level1" defaultValue="" required>
          <option value="" disabled>Select state / UT</option>
          {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <p className="consent-notice">
        We use your details to process your ABSAT registration and your application for admission.
        {ABSAT.privacyPolicyUrl ? (
          <> See our <a href={ABSAT.privacyPolicyUrl}>Privacy Policy</a>.</>
        ) : (
          <> Our privacy policy is published with the Information Bulletin.</>
        )}
      </p>

      <label className="consent">
        <input type="checkbox" name="consent_processing" required />
        <span>I agree to the processing of my data for ABSAT registration and admission.</span>
      </label>

      <label className="consent">
        <input type="checkbox" name="consent_marketing" />
        <span>Send me updates about ASMi programmes and events (optional).</span>
      </label>

      <button
        type="submit"
        className="btn-cta-primary"
        data-cta="absat_register_submit"
        disabled={status === 'sending'}
        aria-busy={status === 'sending'}
      >
        {status === 'sending' ? 'Submitting…' : <>Create account &amp; continue</>}
      </button>

      {status === 'done' && (
        <p className="form-note" role="status">
          Thank you. Your details have been received, and the ABSAT helpdesk will contact you
          on your registered email and mobile number.
        </p>
      )}

      {status === 'error' && (
        <p className="form-note" role="alert">
          Something went wrong and your details were not saved. Please try again, or write to{' '}
          <a href={`mailto:${email}`}>{email}</a> or call{' '}
          <a href={phoneHref}>{ABSAT.helpdeskPhone}</a>.
        </p>
      )}
    </form>
  );
}
