export const GET = async (endpoint) => {
  const res = await fetch(endpoint);
  const data = await res.json();

  return data;
};

export const POST = async (endpoint, body) => {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body,
  });
  const data = await res.json();

  return data;
};

export const DELETE = async (endpoint, id) => {
  const res = await fetch(`${endpoint}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "Application/json",
    },
  });
  const data = await res.json();

  return data;
};
