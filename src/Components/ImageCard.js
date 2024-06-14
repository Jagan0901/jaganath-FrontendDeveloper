

export const ImageCard = ({ image }) => {
    // const source = `${process.env.PUBLIC_URL}/images/${image}`
  return (
    <div className="image-card">
      <img src={image} alt="img" />
    </div>
  );
};


