import { login, register } from "@/services/auth.service";

export function useAuth() {
  return {
    login,
    register,
  };
}