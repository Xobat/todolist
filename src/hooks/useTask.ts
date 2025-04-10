import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import {FilterType} from "../services/taskStorage";

export function useTask() {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error('useTask must be used within a TaskProvider');
    }

    const { state, dispatch } = context;

    const addTask = (title: string) => {
        if (!title.trim()) return;
        dispatch({
            type: 'ADD_TASK',
            payload: { title: title.trim() }
        });
    };

    const removeTask = (id: number) => {
        dispatch({
            type: 'REMOVE_TASK',
            payload: { id }
        });
    };

    const toggleTaskStatus = (id: number, isDone: boolean) => {
        dispatch({
            type: 'TOGGLE_TASK',
            payload: { id, isDone }
        });
    };

    const setFilter = (filter: FilterType) => {
        console.log(filter);
        dispatch({
            type: 'SET_FILTER',
            payload: { filter }
        });
    };

    const filteredTasks = state.tasks.filter(task => {
        if (state.filter === 'all') return true;
        if (state.filter === 'active') return !task.isDone;
        if (state.filter === 'completed') return task.isDone;
        return true;
    });

    return {
        tasks: filteredTasks,
        allTasks: state.tasks,
        filter: state.filter,
        setFilter,
        addTask,
        removeTask,
        toggleTaskStatus
    };
}