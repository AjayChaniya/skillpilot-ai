"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/ui/Input";


import {
  loginSchema,
  LoginFormValues,
} from "@/validations/auth.schema";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const { login, isLoading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: LoginFormValues) {
    login(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div>
        <Input
          placeholder="Email"
          {...register("email")}
        />

        <p className="text-sm text-red-500 mt-1">
          {errors.email?.message}
        </p>
      </div>

      <div>
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />

        <p className="text-sm text-red-500 mt-1">
          {errors.password?.message}
        </p>
      </div>

      <Button
        type="submit"
        className="w-full"
      >
        {isLoading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
}