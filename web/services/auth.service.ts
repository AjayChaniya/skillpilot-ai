import {
  LoginRequest,
  RegisterRequest,
} from "@/types/auth";

export async function login(data: LoginRequest) {
  console.log("Login Request", data);

  // Backend API yahan aayegi
}

export async function register(
  data: RegisterRequest
) {
  console.log("Register Request", data);

  // Backend API yahan aayegi
}