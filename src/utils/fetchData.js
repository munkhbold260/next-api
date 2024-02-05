export default function dummyData({ designs }) {
  console.log(designs);
  return { designs };
}

export async function getStaticProps() {
  const response = await fetch(
    `https://dev.to/api/articles?tag=design&per_page=1`
  );
  const designs = await response.json();
  return {
    props: { designs },
  };
}
