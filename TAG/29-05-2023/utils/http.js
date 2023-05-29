const GET = async (endpoint) => {
  const res = await fetch(endpoint);

  try {
    if (!res.ok) throw new Error("Request failed!");
  } catch (error) {
    console.error(error);
  }
  const data = await res.json();

  return data;
};

export default GET;
