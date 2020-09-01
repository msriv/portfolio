import { useRouter } from "next/router";

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>{id}</div>;
};
