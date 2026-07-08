import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { authService } from "@/services/auth.service";

import { userStorage } from "@/lib/user";
import { authStorage } from "@/lib/auth";

export function useAuth() {
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: authService.login,

    onSuccess: (data) => {
      authStorage.setToken(data.accessToken);

      userStorage.setUser(data.user);

      toast.success("Login successful");

      router.push("/dashboard");
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return {
    login: loginMutation.mutate,
    isLoading: loginMutation.isPending,
    error: loginMutation.error,
  };
}