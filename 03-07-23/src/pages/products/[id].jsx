import { useRouter } from "next/router";
import Product from "@/components/product";

export default function PostDin({ data }) {
  const router = useRouter();

  return (
    <div>
      <Product data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://dummyjson.com/products/search?q=${context.query.id}`
  );
  const data = await res.json();

  return {
    props: {
      data: data?.products[0] || {},
    },
  };
}
