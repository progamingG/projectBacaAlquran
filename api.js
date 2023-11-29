`GET`;
export async function alq(url) {
  const getsurah = await fetch(`${url}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  let surah = await getsurah.json().then((res) => res);
  return surah;
}
