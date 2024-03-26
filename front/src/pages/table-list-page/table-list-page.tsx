import { useQuery } from "@tanstack/react-query";

import { TableList } from "../../components";
import { Container } from "../../ui";
import { useUser } from "../../stores";
import { getTables } from "../../api";

export function TableListPage() {
  const { token } = useUser((state) => state);
  const { data: tables } = useQuery({
    queryKey: ["tables"],
    queryFn: async () => {
      const response = await getTables(token ?? "");
      return Array.isArray(response) ? response : [];
    },
  });

  return (
    <Container>
      <>
        <TableList tables={tables ?? []} />
      </>
    </Container>
  );
}
