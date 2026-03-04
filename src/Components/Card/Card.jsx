import "./card.css";

export function Card({ img, title, text }) {
  return (
    <div className="feature-item">
      <div className="imgCircle">
        <img src={img} alt={title} className="imgFeatures" />
      </div>
      <h3 className="title">{title}</h3>
      <p className="text">{text}</p>
    </div>
  );
}
