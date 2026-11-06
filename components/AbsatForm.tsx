'use client';

import { useState } from 'react';
import { ABSAT } from '@/data/absat';

const STATUS = [
  'Final year, still figuring it out',
  'Graduated, looking at MBAs',
  'Working, thinking about an MBA',
];

/**
 * ABSAT registration form — markup per spec §4 (names, autocomplete, required,
 * pattern validation, two separate unticked DPDP consents).
 *
 * There is no candidate portal yet, so the form does not submit: it validates,
 * then explains that registration has not opened and offers the helpdesk.
 * To go live, set ABSAT.portalSignupUrl in data/absat.ts — the action and
 * method below pick it up and the notice stops appearing.
 */
export default function AbsatForm() {
  const [done, setDone] = useState(false);
  const live = Boolean(ABSAT.portalSignupUrl);
  const email = ABSAT.helpdeskEmail ?? 'info@asmibschool.com';

  return (
    <form
      id="absat-register"
      className="absat-form"
      action={ABSAT.portalSignupUrl ?? undefined}
      method={live ? 'post' : undefined}
      noValidate={!live}
      onSubmit={(e) => {
        if (live) return;
        e.preventDefault();
        if (!(e.currentTarget as HTMLFormElement).reportValidity()) return;
        setDone(true);
      }}
    >
      <div className="field">
        <label htmlFor="absat-name">Full name</label>
        <input id="absat-name" name="full_name" type="text" autoComplete="name" placeholder="Your name" required />
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
            placeholder="10-digit mobile"
            aria-describedby="absat-mobile-hint"
            required
          />
        </div>
        <p className="field-hint" id="absat-mobile-hint">
          10-digit number. Outside India? Contact the helpdesk.
        </p>
      </div>

      <div className="field">
        <label htmlFor="absat-email">Email</label>
        <input id="absat-email" name="email" type="email" autoComplete="email" placeholder="you@email.com" required />
      </div>

      <div className="field">
        <label htmlFor="absat-status">Where are you right now?</label>
        <select id="absat-status" name="status" defaultValue={STATUS[0]} required>
          {STATUS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="field">
        <label htmlFor="absat-city">City</label>
        <input id="absat-city" name="city" type="text" autoComplete="address-level2" placeholder="Your city" required />
      </div>

      <p className="consent-notice">
        We use your details to book your ABSAT slot and process your application for admission.
        {ABSAT.privacyPolicyUrl ? (
          <> See our <a href={ABSAT.privacyPolicyUrl}>Privacy Policy</a>.</>
        ) : (
          <> Our privacy policy is published with the Information Bulletin.</>
        )}
      </p>

      <label className="consent">
        <input type="checkbox" name="consent_processing" required />
        <span>I agree to the processing of my data for ABSAT slot booking and admission.</span>
      </label>

      <label className="consent">
        <input type="checkbox" name="consent_marketing" />
        <span>Send me updates about ASMi programmes and events (optional).</span>
      </label>

      <button type="submit" className="btn-cta-primary" data-cta="absat_register_submit">
        Book my slot
      </button>

      {done && (
        <p className="form-note" role="status">
          Online booking isn&apos;t connected yet, so this form can&apos;t send your details.
          Call a counsellor on{' '}
          <a href={`tel:${ABSAT.helpdeskPhone.replace(/\s/g, '')}`}>{ABSAT.helpdeskPhone}</a>{' '}
          or write to <a href={`mailto:${email}`}>{email}</a> and they&apos;ll book your slot.
        </p>
      )}
    </form>
  );
}
