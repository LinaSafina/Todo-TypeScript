class TodoModel {
  constructor(text: string) {
    this.text = text;
    this.id = new Date().toISOString();
  }

  text: string;
  id: string;
}

export default TodoModel;
