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
          10-digit Indian mobile number. Candidates outside India can give an alternate number to the helpdesk.
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

      <button type="submit" className="btn-cta-primary" data-cta="absat_register_submit">
        Create account &amp; continue
      </button>

      {done && (
        <p className="form-note" role="status">
          ABSAT 2027 registration has not opened yet, so this form cannot submit.
          Write to <a href={`mailto:${email}`}>{email}</a> or call{' '}
          <a href={`tel:${ABSAT.helpdeskPhone.replace(/\s/g, '')}`}>{ABSAT.helpdeskPhone}</a>{' '}
          and the helpdesk will notify you the day registration goes live.
        </p>
      )}
    </form>
  );
}
