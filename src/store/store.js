import create from "zustand";

export const [userProvider] = create((set, get) => ({
  currentUser: {
    isAuthenticated: false,
    token: "",
  },
  setCurrentUser: (user) => {
    set(() => ({
      currentUser: user,
    }));
  },
}));
