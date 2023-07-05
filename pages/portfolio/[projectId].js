import { useRouter } from 'next/router'
function PortfolioIdPage() {
  const router = useRouter()
  return (
    <div>
      <h1>this is PortfolioId page!</h1>
      <div>
        the id is { router.query.projectId}
      </div>
    </div>
  );
}
export default PortfolioIdPage;