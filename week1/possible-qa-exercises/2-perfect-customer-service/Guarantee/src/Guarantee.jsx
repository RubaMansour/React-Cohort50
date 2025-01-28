export default function Guarantee({ img, title, description }) {
  return (
    <div>
      <img src={img} alt={title} style={{ width: '100px', height: '100px' }} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
