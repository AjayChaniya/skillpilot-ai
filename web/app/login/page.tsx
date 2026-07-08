"use client";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "@base-ui/react/button";

export default function LoginPage() {
  const { login,isLoading } = useAuth();

 const handleLogin = () => {
  login({
    email: "test@gmail.com",
    password: "123456",
  });
};

  return (
    <main className="flex min-h-screen items-center justify-center">
     <Button onClick={handleLogin}>
  {isLoading ? "Logging in..." : "Login"}
</Button>
    </main>
  );
}