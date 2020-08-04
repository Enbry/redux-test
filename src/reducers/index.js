import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "../actions/types";

let todos = [];

if (localStorage.getItem("todos") != null) {
    const todosString = localStorage.getItem("todos");
    todos = JSON.parse(todosString);
}
const initialState = {
    todos
};

export default function rootReducer(state = initialState, action) {

    let todos = [...state.todos];
    let position;

    console.log(action);
    switch (action.type) {

        case ADD_TODO:
            // exemple ajout dans le localStorage
            localStorage.setItem("todos", JSON.stringify([...state.todos, action.payload]))

            // manipulation du state pour le ADD_TODO
            // Ajout d'une tache dans le state
            return {
                todos: [...state.todos, action.payload]
            };

        case DELETE_TODO:
            // Suppression d'une tâche dans le state
            position = todos.indexOf(action.payload);
            todos.splice(position, 1);

            // gestion du localStorage
            localStorage.setItem("todos", JSON.stringify(todos));

            return {
                todos
            }

        case COMPLETE_TODO:
            // Compléter une tâche
            position = todos.indexOf(action.payload);
            let todo = { ...todos[position] };
            todo.complete = !todo.complete;
            todos[position] = todo;

            // gestion du localStorage
            localStorage.setItem("todos", JSON.stringify(todos));

            return {
                todos
            }
        default:
            return state;
    }

}