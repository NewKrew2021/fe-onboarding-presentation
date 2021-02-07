import "./ImageSlide.css";

function ImageSlide({ title, img, caption }) {
  return (
    <div className="image-slide">
      <img src={img}></img>
      <p className="caption">{caption}</p>
    </div>
  );
}

export default ImageSlide;
