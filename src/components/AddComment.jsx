import { useEffect, useState } from "react"
import { Form, Row, Col, Button } from "react-bootstrap"
import StarRating from "./StarRating"

function AddComment({ asin, fetchComments }) {
    const [formData, setFormData] = useState({
        comment: '',
        rate: 0,
        elementId: asin
    })
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        setFormData(prev => ({
            ...prev,
            elementId: asin
        }))
    }, [asin])

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
                    rate: 0,
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
            <Row className="g-3 mb-3">
                <Form.Group as={Col} md="12" controlId="comment">
                    <Form.Label>La tua recensione</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Scrivi cosa ne pensi del libro..."
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}

                    />

                </Form.Group>
                <Form.Group as={Col} md="12" controlId="rate">
                    <Form.Label>Valutazione</Form.Label>
                    <StarRating
                        rating={Number(formData.rate)}
                        setRating={(value) =>
                            setFormData({
                                ...formData,
                                rate: value
                            })
                        }
                        editable={true}
                    />
                </Form.Group>
                <Button type="submit" className="w-100 mt-2">
                    Pubblica recensione
                </Button>
            </Row>
        </Form>

    )
}

export default AddComment