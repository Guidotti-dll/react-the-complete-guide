import { useRouter } from "next/router";
const DetailPage = () => {
  const {
    query: { newsId },
  } = useRouter();

  return <h1>The Detail Page {newsId}</h1>;
};

export default DetailPage;
