const Card = ({ name, username }) => {
  return (
    <div className="card">
      <h5>{name}</h5>
      <p>{username}</p>
    </div>
  );
};

export default Card;
