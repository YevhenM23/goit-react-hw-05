import { useEffect, useState } from "react";
import { fetchReviews } from "../../services/api";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const getReview = async () => {
      setLoading(true);
      try {
        const result = await fetchReviews(movieId);
        setReview(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getReview();
  }, [movieId]);

  return (
    <div className="">
      {loading && <p>Loading...</p>}
      {review.map((rev) => (
        <div key={rev.id}>
          <div>{rev.author}</div>
          <div>{rev.content}</div>
        </div>
      ))}
    </div>
  );
};

export default MovieReviews;
