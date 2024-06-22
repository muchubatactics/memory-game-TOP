import "../styles/card.css";

export default function Card({image}) {
  return (
    <div className="card">
      <img src={image} />
    </div>
  );
}