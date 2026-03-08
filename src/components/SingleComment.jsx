import { ListGroup } from "react-bootstrap"

function SingleComment({comment}) {
  return (
    <div>
      <ListGroup.Item>{comment.comment}</ListGroup.Item>
    </div>
  )
}

export default SingleComment
