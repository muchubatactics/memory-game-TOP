import "../styles/card.css";

export default function Card({image}) {
  return (
    <div className="card">
      <div className="img-div"><img src={image} /></div>
    </div>
  );
}