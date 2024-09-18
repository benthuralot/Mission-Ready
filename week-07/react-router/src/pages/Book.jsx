import { useParams, Link } from "react-router-dom";

export default function Book() {
  const params = useParams();
  return (
    <div>
      <h1>Books Page</h1>
      <h3>You are about to access book:{params.bookID}</h3>
      <Link to="/">Home</Link>
    </div>
  );
}
