import Todo from "./Todo";

class File {
  path: string;
  name: string;
  todos: Todo[];

  constructor(path: string, name: string, todos: Todo[]) {
    this.path = path;
    this.name = name;
    this.todos = todos;
  }
}

export default File;
