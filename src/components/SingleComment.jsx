import { ListGroup, Button } from "react-bootstrap"
import StarRating from "./StarRating"

function SingleComment({ comment, fetchComments }) {
  const deleteComment = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWFjM2Y1N2VhZGY1YzAwMTUwYzY2ZGUiLCJpYXQiOjE3NzI4OTYwODcsImV4cCI6MTc3NDEwNTY4N30.kkWRVAJFLhXWP_kJqdCp1i-7ImXt9vxOndxE0QDKab0",
          }
        }
      )

      if (response.ok) {
        fetchComments()
      } else {
        alert("Errore eliminazione")
      }
    } catch (error) {
      console.log(error)
    }
  }

 const editComment = async () => {
  const newText = prompt("Modifica commento", comment.comment)
  if (!newText) return

  const newRate = prompt("Modifica valutazione da 1 a 5", comment.rate)
  if (!newRate) return

  if (newRate < 1 || newRate > 5) {
    alert("Il voto deve essere da 1 a 5")
    return
  }

  const updatedComment = {
    comment: newText,
    rate: newRate,
    elementId: comment.elementId
  }

  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWFjM2Y1N2VhZGY1YzAwMTUwYzY2ZGUiLCJpYXQiOjE3NzI4OTYwODcsImV4cCI6MTc3NDEwNTY4N30.kkWRVAJFLhXWP_kJqdCp1i-7ImXt9vxOndxE0QDKab0",
        },
        body: JSON.stringify(updatedComment)
      }
    )

    if (response.ok) {
      fetchComments()
    } else {
      alert("Errore modifica commento")
    }
  } catch (error) {
    console.log(error)
  }
}

  return (
    <ListGroup.Item
      data-testid="single-comment"
      className="py-3 px-3 border-0 border-bottom"
    >
      <div className="d-flex justify-content-between align-items-start gap-3">
        <div className="flex-grow-1">
          <div className="mb-2">
            <StarRating rating={Number(comment.rate)} />
          </div>

          <p className="mb-0" style={{ lineHeight: "1.5" }}>
            {comment.comment}
          </p>
        </div>

        <div className="d-flex flex-column gap-2">
          <Button variant="outline-secondary" size="sm" onClick={editComment}>
            Edit
          </Button>

          <Button variant="outline-danger" size="sm" onClick={deleteComment}>
            Delete
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  )
}

export default SingleComment