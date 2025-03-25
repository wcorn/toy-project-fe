import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getAbout } from "../api";

export default function HomePage() {
  const [text, setText] = useState("");

  useEffect(() => {
    getAbout()
      .then((data) => setText(data.text || ""))
      .catch((error) => console.error("Error fetching about:", error));
  }, []);

  return (
    <Layout>
      <div className="text-center">
        <h1 className="display-4">Main Page</h1>
        <p className="lead">{text || "Loading..."}</p>
      </div>
    </Layout>
  );
}
