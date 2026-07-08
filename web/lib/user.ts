const USER_KEY = "skillpilot_user";

export const userStorage = {
  getUser() {
    if (typeof window === "undefined") return null;

    const user = localStorage.getItem(USER_KEY);

    return user ? JSON.parse(user) : null;
  },

  setUser(user: unknown) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  removeUser() {
    localStorage.removeItem(USER_KEY);
  },
};