import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  // useEffect(() => {
  //   fetch("/api/hello", {
  //     method: "POST",
  //     headers: {
  //       my_personal_key: "Pippo",
  //     },
  //     body: JSON.stringify({
  //       a: 2,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log("Client", data));
  // }, []);

  const onHandleFetchData = () => {
    fetch("/api/hello", {
      method: "POST",
      headers: {
        my_personal_key: "Pippo",
      },
      body: JSON.stringify({
        a: 2,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Client", data));
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.Homepage}>
        <h1>Homepage</h1>
        <button onClick={onHandleFetchData}>Fetch</button>
        <Link href="/todoList">Todo List</Link>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("SSR - getServerSideProps - in Page");
  console.log(process.env.NEXT_PUBLIC_NOME_VARIABILE_ENV);

  return {
    props: {},
  };
}
