import "../styles/card.css";

export default function Card({image, index, cb}) {

  function handleClick() {
    cb(index);
  }

  return (
    <div className="card">
      <img src={image} onClick={handleClick}/>
    </div>
  );
}