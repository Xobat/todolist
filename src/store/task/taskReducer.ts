import { TasksAction, TasksState } from './taskTypes';
import { taskStorage } from './taskStorage';

export const taskReducer = (state: TasksState, action: TasksAction): TasksState => {
    let newState: TasksState;

    switch (action.type) {
        case 'ADD_TASK':
            newState = {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: taskStorage.generateId(),
                        title: action.payload.title,
                        isDone: false
                    }
                ]
            };
            break;

        case 'REMOVE_TASK':
            newState = {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload.id)
            };
            break;

        case 'TOGGLE_TASK':
            newState = {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id
                        ? { ...task, isDone: action.payload.isDone }
                        : task
                )
            };
            break;

        case 'SET_FILTER':
            newState = {
                ...state,
                filter: action.payload.filter
            };
            taskStorage.saveFilter(newState.filter);
            return newState;

        default:
            return state;
    }

    taskStorage.saveTasks(newState.tasks);
    return newState;
}

export const getInitialTasksState = (): TasksState => {
    return {
        tasks: taskStorage.getTasks(),
        filter: taskStorage.getFilter()
    };
}
