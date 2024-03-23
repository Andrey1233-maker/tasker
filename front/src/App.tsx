import { useMutation } from "@tanstack/react-query";

import { AuthPage } from "./pages";
import { Header } from "./components";
import { useEffect } from "react";
import { useUser } from "./stores";
import { getWhoami } from "./api";

import styles from "./App.module.scss";
import { Container } from "./ui";

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
    <div className={styles['page']}>
      <AuthPage />
      <Header />
      <Container>123</Container>
    </div>
  );
}

export default App;
