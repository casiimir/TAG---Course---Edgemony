import AtomSearchItem from "@/components/atomSearchItem";
import styles from "../styles/Search.module.scss";
import { GetServerSidePropsContext } from "next";

interface DataSearch {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: any;
  num_found: number;
  q: string;
  offset: null;
}

export default function Search({ data }: { data: DataSearch }) {
  const { numFound, docs } = data;

  return (
    <div className={styles.Search}>
      <p className={styles.numOfElements}>{numFound} results found</p>

      {docs.map((item: any) => (
        <AtomSearchItem item={item} key={item.key} />
      ))}
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const searchValue = context.query.q;

  const resAuthor = await fetch(
    `https://openlibrary.org/search.json?author=${searchValue}`
  );
  const dataAuthor = await resAuthor.json();

  const resWork = await fetch(
    `https://openlibrary.org/search.json?title=${searchValue}`
  );
  const dataWork = await resWork.json();

  return {
    props: {
      data: { ...dataAuthor, ...dataWork },
    },
  };
}
