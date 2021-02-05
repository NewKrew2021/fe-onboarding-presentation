function ImageSlide ({title, img, caption}) {
    return (
        <div className="image-slide">
        <div className="title">
          {title}
        </div>
        <img src={img}></img>
        <div className="caption">
          {caption}
        </div>
      </div>
    )
}

export default ImageSlide;