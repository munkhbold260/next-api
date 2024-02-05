export default async function () {
  const data = await fetch("https:dev.to/api/articles/1747862");
  const blog = await data.json();
  response.setHeader("Access-Control-Allo-Orign", "*");

  response.status(200).json();
}
