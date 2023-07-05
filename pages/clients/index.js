import Link from "next/link";
function ClientsPage() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];
  return (
    <>
      <h1>this is ClientsPage</h1>
      <div>
        <ul>
          {clients.map((client) => (
            <li key={client.id}>
              {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
              <Link href={{
                pathname:'/clients/[id]',
                query:{
                  id: client.id
                }
              }}>{client.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ClientsPage;
