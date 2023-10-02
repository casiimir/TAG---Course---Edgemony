import { GetServerSidePropsContext } from "next";
import styles from "../styles/DynamicPage.module.scss";

export default function ({ data }: { data: any }) {
  const { title, publish_date } = data;

  return (
    <div className={styles.DynamicPage}>
      <h1>{title}</h1>
      <p>Published: {publish_date || "???"}</p>
      {data?.subject_people && (
        <ul>
          <b>Subject people</b>
          {data?.subject_people.map((sub: string, i: number) => (
            <li key={i}>
              <p>{sub}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const dynamicValue = context?.params?.id;

  const res = await fetch(`https://openlibrary.org/books/${dynamicValue}.json`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
