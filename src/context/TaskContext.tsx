import React, { createContext, useReducer, ReactNode, Dispatch } from 'react';
import { taskReducer, getInitialTasksState, TasksState, TasksAction } from '../store/task/taskReducer';

type TaskContextType = {
    state: TasksState;
    dispatch: Dispatch<TasksAction>;
} | null;

export const TaskContext = createContext<TaskContextType>(null);

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