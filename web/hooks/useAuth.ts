import { authService } from "@/services/auth.service";

export function useAuth() {
  return {
    login: authService.login,
    register: authService.register,
  };
}