import { useState, useEffect } from "react";

export default function frontend() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getBackEndData() {
      const res = await fetch("http://localhost:4000/api/users");
      const article = await res.json();
      setData(article);
    }

    getBackEndData();
  }, []);

  return (
    <div className="flex flex-col">
      {data?.title}
      <p> {data?.tag_list}</p>
      <p>hihi</p>
    </div>
  );
}
