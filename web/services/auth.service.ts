import { LoginRequest } from "@/types/auth";
import { mockTokens, mockUser } from "@/mocks/auth";

export const authService = {
  async login(data: LoginRequest) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (
      data.email === "admin@skillpilot.ai" &&
      data.password === "123456"
    ) {
      return {
        accessToken: mockTokens.accessToken,
        refreshToken: mockTokens.refreshToken,
        user: mockUser,
      };
    }

    throw new Error("Invalid email or password");
  },
};