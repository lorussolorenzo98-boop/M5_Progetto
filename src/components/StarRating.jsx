import { FaStar } from "react-icons/fa"

function StarRating({ rating, setRating, editable = false }) {

  return (
    <div>
      {[1,2,3,4,5].map((star) => (
        <FaStar
          key={star}
          size={22}
          style={{ cursor: editable ? "pointer" : "default", marginRight: 4 }}
          color={star <= rating ? "#ffc107" : "#e4e5e9"}
          onClick={() => editable && setRating(star)}
        />
      ))}
    </div>
  )
}

export default StarRating