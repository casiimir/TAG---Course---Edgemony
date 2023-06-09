import "./index.css";

const Card = ({ data }) => {
  return (
    <div className="Card" id={data.id}>
      {data.content}
    </div>
  );
};

export default Card;
