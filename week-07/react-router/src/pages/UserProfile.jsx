import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function UserProfile() {
  const params = useParams();
  console.log(params);

  return (
    <>
      <div>
        <h1>This is the UserProfile page</h1>
        <p>We can get the parameter ID from the URL: {params.id}</p>
        <Link to="/">Home</Link>
      </div>
    </>
  );
}
