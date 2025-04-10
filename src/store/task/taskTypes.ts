export type TaskListItemType = {
    id: number;
    title: string;
    isDone: boolean;
}

export type TasksState = {
    tasks: TaskListItemType[];
}

export type TasksAction =
    | { type: 'ADD_TASK'; payload: { title: string } }
    | { type: 'REMOVE_TASK'; payload: { id: number } }
    | { type: 'TOGGLE_TASK'; payload: { id: number; isDone: boolean } };