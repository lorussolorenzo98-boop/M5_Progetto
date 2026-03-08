import { ListGroup } from "react-bootstrap"
import StarRating from "./StarRating"

function SingleComment({ comment }) {
  return (
    <ListGroup.Item
      data-testid="single-comment"
      className="py-3 px-3 border-0 border-bottom"
    >
      <div className="mb-2">
        <StarRating rating={Number(comment.rate)} />
      </div>

      <p className="mb-0" style={{ lineHeight: "1.5" }}>
        {comment.comment}
      </p>
    </ListGroup.Item>
  )
}

export default SingleComment