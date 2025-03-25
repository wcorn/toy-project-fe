import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { getNotes, postNote } from "../api";

export default function NotesPage() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const data = await getNotes();
      setList(data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const handleUpload = async () => {
    if (!text.trim()) {
      alert("노트를 입력해주세요.");
      return;
    }
    try {
      await postNote(text);
      setText("");
      fetchList();
    } catch (error) {
      console.error("Error posting note:", error);
    }
  };

  return (
    <Layout>
      <div>
        <h1 className="text-center display-5 mb-4">Notes</h1>
        <div className="row justify-content-center mb-3">
          <div className="col-md-8">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter note"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button onClick={handleUpload} className="btn btn-success">
                Upload
              </button>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {list.length > 0 ? (
                list.map((item, index) => (
                  <tr key={index}>
                    <td>{item.text}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="text-center">No notes available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-3">
          <Link to="/" className="btn btn-secondary">
            Back
          </Link>
        </div>
      </div>
    </Layout>
  );
}
