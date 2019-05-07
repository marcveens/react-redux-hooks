export type Todo = {
    value: string;
};

export type Todos = Todo[];

export type TodoState = {
    readonly todos: Todos;
};