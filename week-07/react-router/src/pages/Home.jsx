import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/contact">Contact</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Sign Up</Link>
      <br />
      <Link to="/users/:id">UserProfile</Link>
      <br />
      <Link to="/book/bookID">Book Page</Link>
    </div>
  );
}
