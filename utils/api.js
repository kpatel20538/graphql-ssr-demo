import fetch from "isomorphic-fetch";

export const query = async (params) => {
  const response = await fetch("https://graphql-pokemon.now.sh/", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });
  return response.json();
}