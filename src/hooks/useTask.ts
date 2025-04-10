import { useContext } from 'react';
import { TaskContext } from '../context';
import { FilterType, TaskListItemType } from '../store';

export function useTask() {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error('useTask должен быть использован вместе с TaskProvider');
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
        dispatch({
            type: 'SET_FILTER',
            payload: { filter }
        });
    };

    const filteredTasks = state.tasks.filter((task: TaskListItemType) => {
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
