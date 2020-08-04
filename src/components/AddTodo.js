import React, {useState} from 'react';
import { Button } from './Button';
import { addTodo } from '../actions';
import { useDispatch } from 'react-redux';

export const AddTodo = () => {

    const [text, setText] = useState("")
    
    // Initialisation du dispatch pour envoyer les actions à notre reducer
    const dispatch = useDispatch();

    const addTodoAction = () => {
        // Récupérer l'objet de l'action et l'envoyer au reducer

        dispatch(addTodo(text))

        // Mettre à jour le text avec une chaîne vide et donc le state local
        
        setText('')
    };

    return (
        <div className="form-group">
            <input
                type="text"
                className="todo-input"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <Button
                className="btn"
                action={() => addTodoAction()}
            >
                Ajouter une tâche
            </Button>
        </div>
    )
    
}

export default AddTodo;