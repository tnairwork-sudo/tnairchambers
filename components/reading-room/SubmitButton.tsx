"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Entering…" : "Enter"}
    </button>
  );
}
