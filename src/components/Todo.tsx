const Todo: React.FC<{
  text: string;
  onDelete: () => void;
}> = (props) => {
  return <li onClick={props.onDelete}>{props.text}</li>;
};

export default Todo;
