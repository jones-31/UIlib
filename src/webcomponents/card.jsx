import "./../styles/card.css";

const Card = ({ image,title = "", description = "", children }) => {
  return (
    <div className="card">
      {image && <figure><img src={image} alt={title} /></figure> }
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="actions">{children}</div>
    </div>
  );
};

export default Card;
