import {FilterType} from './taskStorage';

export type TaskListItemType = {
    id: number;
    title: string;
    isDone: boolean;
}

export type TasksState = {
    tasks: TaskListItemType[];
    filter: FilterType
};

export type TasksAction =
    | { type: 'ADD_TASK'; payload: { title: string } }
    | { type: 'REMOVE_TASK'; payload: { id: number } }
    | { type: 'TOGGLE_TASK'; payload: { id: number; isDone: boolean } }
    | { type: 'SET_FILTER'; payload: { filter: 'all' | 'active' | 'completed' } };
