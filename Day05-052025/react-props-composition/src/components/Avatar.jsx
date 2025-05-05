function Avatar({ imageUrl, alt }) {
  return (
    <img
      src={imageUrl}
      alt={alt}
      style={{ borderRadius: "50%", width: 80, height: 80 }}
    />
  );
}

export default Avatar;
