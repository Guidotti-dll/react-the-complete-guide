import Link from "next/link";
const NewsPage = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/news/nextjs-is-awesome">NextJS Is awesome</Link>
        </li>
        <li>
          <Link href="/news/something-else">something else</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
