
function Card({value}) {
  return (
    <div className="card">
      <img src={`http://localhost:9000${value.image}`} alt="" />
      <div className="paraAndBtn">
        <h2>{value.name}</h2>
        <button>{"$ " + value.price.toFixed(2)}</button>
      </div>
    </div>
  );
}
export default Card;
