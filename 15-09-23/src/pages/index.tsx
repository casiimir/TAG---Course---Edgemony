import Head from "next/head";
import { supabase } from "./utils/supabase";
import ListItem from "@/components/listItem";

import { ListItemData } from "@/types/general";
import styles from "@/styles/Home.module.css";

export default function Home({ listItemData }: { listItemData: ListItemData }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Typescript Todo List</h1>
        <ListItem data={listItemData.data} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const listItemData = await supabase.from("todo-list-data").select("*");

  return {
    props: {
      listItemData,
    },
  };
}