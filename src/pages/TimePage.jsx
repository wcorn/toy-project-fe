import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { getTime } from "../api";

export default function TimePage() {
  const [time, setTime] = useState("");

  useEffect(() => {
    getTime()
      .then((data) => setTime(data.time))
      .catch((error) => console.error("Error fetching time:", error));
  }, []);

  return (
    <Layout>
      <div className="text-center">
        <h1 className="display-5">Server Time</h1>
        <p className="fs-4">{time || "Loading..."}</p>
        <Link to="/" className="btn btn-secondary mt-3">
          Back
        </Link>
      </div>
    </Layout>
  );
}
