import { useMutation } from "@tanstack/react-query";

import { AuthPage, TableListPage } from "./pages";
import { Header } from "./components";
import { useEffect } from "react";
import { useUser } from "./stores";
import { getWhoami } from "./api";

import styles from "./App.module.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  const { token, setUser } = useUser((state) => state);

  const { mutate } = useMutation({
    mutationKey: ["whoami", token],
    mutationFn: async () => {
      const response = await getWhoami(token ?? "");
      setUser(response ?? null);
    },
  });

  useEffect(() => {
    if (!token) {
      setUser(null);
      return;
    }
    mutate();
  }, [token, setUser, mutate]);

  return (
    <div className={styles["page"]}>
      <AuthPage />
      <Header />
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
