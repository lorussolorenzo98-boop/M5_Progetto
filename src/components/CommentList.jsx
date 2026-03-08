import { ListGroup } from "react-bootstrap"
import SingleComment from "./SingleComment"

function CommentList({ comments, fetchComments }) {
  return (
    <ListGroup className="rounded overflow-hidden">
      {comments.map(comment => (
        <SingleComment key={comment._id} comment={comment} fetchComments={fetchComments} />
      ))}
    </ListGroup>
  )
}

export default CommentList