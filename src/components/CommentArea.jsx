import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

function CommentArea({book}) {
    const [comments, setComments] = useState([])

    const fetchComments = async () => {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/books/${book.asin}/comments/`,
                {
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWFjM2Y1N2VhZGY1YzAwMTUwYzY2ZGUiLCJpYXQiOjE3NzI4OTYwODcsImV4cCI6MTc3NDEwNTY4N30.kkWRVAJFLhXWP_kJqdCp1i-7ImXt9vxOndxE0QDKab0"
                    },
                },
            );
            const data = await response.json()
           setComments(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { fetchComments() }, [])
    return (
        <>
            <AddComment asin = {book.asin} fetchComments = {fetchComments} />
            <CommentList comments = {comments} />
        </>
    )
}

export default CommentArea