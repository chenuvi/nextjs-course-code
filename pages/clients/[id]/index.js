import { Router, useRouter } from "next/router";
function ClientProjectsPage() {
  const router = useRouter();
  const loadProjectHandler = () => {
    // router.push("/clients/max/projectA");
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: { id: "max", clientProjectId: "A" },
    });
  };
  return (
    <div>
      <h2>The Project of a Given Client</h2>
      <button onClick={loadProjectHandler}> Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
