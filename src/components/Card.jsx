import "../styles/card.css";

export default function Card({text, image}) {
  return (
    <div className="card">
      <div className="img-div"><img src={image} alt={text} /></div>
      <p>{text}</p>
    </div>
  );
}