// Client Side
export default function About({ status, data }) {
  console.log(data);

  return <h1>Pagina About</h1>;
}

// Server Side
export async function getServerSideProps(ctx) {
  // console.log(ctx);

  const res = await fetch("https://api.npoint.io/2eb963f4e6878e21cfd8");
  const data = await res.json();

  return {
    props: {
      status: "ok",
      data,
    },
  };
}
