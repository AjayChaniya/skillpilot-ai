"use client";

import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
  const { login } = useAuth();

  async function handleLogin() {
    await login({
      email: "demo@gmail.com",
      password: "123456",
    });
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <button
        onClick={handleLogin}
        className="rounded-lg bg-blue-600 px-6 py-3 text-white"
      >
        Test Login
      </button>
    </main>
  );
}