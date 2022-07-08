import "./card.styles.css";

const Card = ({ alt, src, h2, p }) => (
  <div className="card-container">
    <img alt={alt} src={src} />
    <h2>{h2}</h2>
    <p>{p}</p>
  </div>
);

export default Card;
