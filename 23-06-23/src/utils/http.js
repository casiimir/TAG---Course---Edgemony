const BASE_URL = "https://dummyjson.com";

export const GET = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  const data = await res.json();

  return data;
};

export const POST = async (endpoint, body) => {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return data;
};
