import Head from "next/head";
import Image from "next/image";
import ListItems from "@/components/listItems";
import styles from "@/styles/Home.module.scss";

// CLIENT
export default function Home({ data }) {
  console.log(process.env.NEXT_PUBLIC_API_KEY);

  return (
    <>
      <Head>
        <title>First Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <ListItems />
        {data.products.map((product) => (
          <p key={product.id}>{product.price}</p>
        ))}

        <Image
          src="https://picsum.photos/3000"
          alt="image"
          width={500}
          height={500}
        />
      </main>
    </>
  );
}

// SERVER
export async function getServerSideProps(context) {
  const res = await fetch("https://dummyjson.com/products?limit=10");
  const data = await res.json();

  // const namePath = context.query.name;

  return {
    props: {
      data: data,
    },
  };
}
