"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { api } from "@/lib/api";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);
    const form = new FormData(event.currentTarget);
    try {
      await api("/auth/register", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(form.entries()))
      });
      router.push("/login");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed.");
    } finally {
      setLoading(false);
    }
  }

return (
  <div className="mx-auto max-w-md rounded-lg border border-black/10 bg-white p-6">
    <h1 className="text-2xl font-black">Create account</h1>

    <div className="mt-4 rounded-md bg-yellow-100 p-4 text-yellow-800">
      Registration and Login are temporarily disabled by the owner while the platform is under development.
      <br />
      <strong>— Saurabh</strong>
    </div>
  </div>
);
}
