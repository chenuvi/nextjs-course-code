import { useRouter } from "next/router";
function SelectedClientIdPage() {
  const router = useRouter();
  console.log("router: ", router);
  return (
    <>
      <div>this Page for a Specific Project for a Selected Client!</div>
      <p>Client id is {router.query.clientId} </p>
    </>
  );
}

export default SelectedClientIdPage;
