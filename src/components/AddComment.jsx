import { useEffect, useState } from "react"
import { Form, Row, Col, Button } from "react-bootstrap"


function AddComment({ asin, fetchComments }) {
    const [formData, setFormData] = useState({
        comment: '',
        rate: '',
        elementId: asin
    })
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    useEffect(() => {
        console.log(formData)
    }, [formData])

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWFjM2Y1N2VhZGY1YzAwMTUwYzY2ZGUiLCJpYXQiOjE3NzI4OTYwODcsImV4cCI6MTc3NDEwNTY4N30.kkWRVAJFLhXWP_kJqdCp1i-7ImXt9vxOndxE0QDKab0"
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                alert("Commento inviato")
                fetchComments()
                setFormData({
                    comment: "",
                    rate: "",
                    elementId: asin
                })
            } else {
                alert("Errore nell'invio del commento")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="comment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="comment"
                        name="comment"
                        value = {formData.comment}
                        onChange={handleChange}

                    />

                </Form.Group>
                <Form.Group as={Col} md="4" controlId="rate">
                    <Form.Label>rate</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="rate"
                        name="rate"
                        value = {formData.rate}
                        onChange={handleChange}

                    />

                </Form.Group>
                <Button type="submit">Send</Button>
            </Row>
        </Form>

    )
}

export default AddComment