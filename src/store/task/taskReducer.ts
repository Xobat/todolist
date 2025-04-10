import { TaskListItemType } from '../../components/TaskList/Item';
import { taskStorage, FilterType } from '../../services/taskStorage';

export type TasksState = {
    tasks: TaskListItemType[];
    filter: FilterType
};

export type TasksAction =
    | { type: 'ADD_TASK'; payload: { title: string } }
    | { type: 'REMOVE_TASK'; payload: { id: number } }
    | { type: 'TOGGLE_TASK'; payload: { id: number; isDone: boolean } }
    | { type: 'SET_FILTER'; payload: { filter: 'all' | 'active' | 'completed' } };

export function taskReducer(state: TasksState, action: TasksAction): TasksState {
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

export function getInitialTasksState(): TasksState {
    return {
        tasks: taskStorage.getTasks(),
        filter: taskStorage.getFilter()
    };
}