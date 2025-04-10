import { createContext, useReducer, ReactNode, Dispatch } from 'react';
import { taskReducer, getInitialTasksState, TasksState, TasksAction } from '../store';

type TaskContextType = {
    state: TasksState;
    dispatch: Dispatch<TasksAction>;
};

export const TaskContext = createContext<TaskContextType | null>(null);

export function TaskProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(taskReducer, getInitialTasksState());

    const taskContextValue = {
        state,
        dispatch
    };

    return (
        <TaskContext.Provider value={taskContextValue}>
            {children}
        </TaskContext.Provider>
    );
}