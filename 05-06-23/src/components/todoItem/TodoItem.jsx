import "./index.css";

const TodoItem = ({ content, setIdNumber }) => {
  const onHandleClick = () => setIdNumber(content.id);

  return (
    <div
      className={`TodoItem ${content.completed && "completed"}`}
      onClick={onHandleClick}
    >
      {content.completed && (
        <input type="checkbox" checked={content.completed} />
      )}

      <h4>{content.todo}</h4>
      <p>userId: {content.userId}</p>
    </div>
  );
};

export default TodoItem;
