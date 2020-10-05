import fetch from "isomorphic-unfetch";

export const fetcher = async function (url: string) {
  const r = await fetch(url);
  return r.json();
};
