import { api } from "@/lib/axios";
import { LoginRequest, RegisterRequest } from "@/types/auth";

export const authService = {
  login(data: LoginRequest) {
    return api.post("/auth/login", data);
  },

  register(data: RegisterRequest) {
    return api.post("/auth/register", data);
  },
};