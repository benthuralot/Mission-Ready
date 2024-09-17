import "./Image.css";
import catSrc from "../assets/cat-src.png";
import dogSrc from "../assets/dog-src.jpg";

export default function Image() {
  return (
    <div className="image-div">
      <h1>Image in public folder</h1>
      <img src="/cat-public.png" alt="My Image" />
      <h1
        style={{
          backgroundImage: `url(${dogSrc})`,
          height: "20rem",
          backgroundSize: "cover",
        }}
      >
        Image in src folder
      </h1>
      <img src={catSrc} alt="cat" />
    </div>
  );
}
