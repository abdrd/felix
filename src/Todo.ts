import File from "./File";

class Todo {
  text: string;
  constructor(file: File, text: string) {
    this.text = text;
  }
}

export default Todo;
