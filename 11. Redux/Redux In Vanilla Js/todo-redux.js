const redux = require('redux');

//Action 
const ADD_TODO = "Add TODO";
const TOGGLE_TODO = "Toggle TODO";

// Action Creators
const addToDo = (text) => ({ text: text, type: ADD_TODO });

// text:text   or text    when key and value both are same 

const toggleToDo = (index) => ({ index, type: TOGGLE_TODO })

const initialState = {
    todos: []
}

// Reducer 
function toDoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false,
                    },
                ],
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, i) => {
                    if (i === action.index) {
                        return {
                            ...todo,
                            completed: !todo.completed,
                        };
                    }
                    return todo;
                }),
            };
        default:
            return state;
    }
}

const store = redux.createStore(toDoReducer);

// dispatch actions
store.dispatch(addToDo('Learn Redux'));
store.dispatch(addToDo('Build an app'));
store.dispatch(toggleToDo(0));
// get the current state
console.log(store.getState());
