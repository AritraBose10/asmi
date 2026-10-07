'use client';

import { useState } from 'react';

/**
 * The subscribe box and forum composer have no backend yet. Rather than
 * silently doing nothing, they surface a note explaining what is missing.
 */
export default function StaticForm({
  className,
  note,
  children,
}: {
  className: string;
  note: string;
  children: React.ReactNode;
}) {
  const [sent, setSent] = useState(false);
  return (
    <>
      <form className={className} onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
        {children}
      </form>
      {sent && <p className="form-note" role="status">{note}</p>}
    </>
  );
}
