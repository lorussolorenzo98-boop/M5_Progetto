import { useState, useEffect, useContext } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { ThemeContext } from "../context/ThemeContextProvider";
import { Spinner } from "react-bootstrap";

function CommentArea({ selected }) {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  const { theme } = useContext(ThemeContext);

  const commentAreaClass = `p-4 border rounded-4 shadow-sm ${
    theme === "dark" ? "bg-dark text-light border-secondary" : "bg-light text-dark"
  }`;

  const fetchComments = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/books/${selected}/comments/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWFjM2Y1N2VhZGY1YzAwMTUwYzY2ZGUiLCJpYXQiOjE3NzI4OTYwODcsImV4cCI6MTc3NDEwNTY4N30.kkWRVAJFLhXWP_kJqdCp1i-7ImXt9vxOndxE0QDKab0",
          },
        }
      );

      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.log(error);
      setError("Errore nel caricamento delle recensioni");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selected) {
      fetchComments();
    }
  }, [selected]);

  if (!selected) {
    return (
      <div className={commentAreaClass}>
        <h4 className="mb-4">Recensioni</h4>
        <p className="mb-0">Seleziona un libro per vedere i commenti</p>
      </div>
    );
  }

  return (
    <div className={commentAreaClass}>
      <h4 className="mb-4">Recensioni</h4>

      <AddComment asin={selected} fetchComments={fetchComments} />

      <hr className="my-4" />

      {error && <p className="text-danger mb-3">{error}</p>}

      {loading ? (
        <div className="text-center py-3">
          <Spinner animation="border" className="mb-2" />
          <p className="mb-0">Loading reviews...</p>
        </div>
      ) : (
        <CommentList comments={comments} fetchComments={fetchComments} />
      )}
    </div>
  );
}

export default CommentArea;