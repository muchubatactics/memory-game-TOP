import "../styles/card.css";

export default function Card({image, keyy, cb}) {

  function handleClick() {
    cb(keyy);
  }

  return (
    <div className="card">
      <img src={image} onClick={handleClick}/>
    </div>
  );
}