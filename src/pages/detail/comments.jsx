import { useEffect } from "react";
import api from "../../utils/api";

const Comments = ({ videoId }) => {
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/comments", { params: { id: videoId } })
      .then((res) => setComments(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [videoId]);

  if (loading) return <Spinner />;

  if (error) return null;

  return (
    <div className="my-6">
      <h2 className="text-xl font-bold"> {comments.commentsCount} Yorum </h2>

      <input
        type="text"
        placeholder="Yorum ekleyiniz.."
        className="w-full bg-transparent border-b border-[#3e403f] p-2 my-3 outline-none"
      />
      <div> {comments.data.map((comment, key) => <div key={key}> </div> )}</div>
    </div>
  );
};

export default Comments;
