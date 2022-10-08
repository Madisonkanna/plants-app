import { useRouter } from "next/router";

const plantPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(router, "router");
  return <h1>{id}</h1>;
};

export default plantPage;
