export default function Home() {
  async function getArticle() {
    const response = await fetch(" http:localhost:4000/api/blogs");
    const article = await response.json();
  }
  return <>4000ee</>;
}
