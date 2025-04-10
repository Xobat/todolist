import { TaskListItemType } from './taskTypes';

const STORAGE_KEY = 'todo_tasks';
const FILTER_KEY = 'todo_filter';

export type FilterType = 'all' | 'active' | 'completed';

export const taskStorage = {
    getTasks: (): TaskListItemType[] => {
        try {
            const tasksJson = localStorage.getItem(STORAGE_KEY);
            return tasksJson ? JSON.parse(tasksJson) : [];
        } catch (error) {
            console.error('Ошибка при загрузке задач:', error);
            return [];
        }
    },

    saveTasks: (tasks: TaskListItemType[]): void => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
        } catch (error) {
            console.error('Ошибка при сохранении задач:', error);
        }
    },

    getFilter: (): FilterType => {
        try {
            const filter = localStorage.getItem(FILTER_KEY);
            return filter ? (filter as FilterType) : 'all';
        } catch (error) {
            console.error('Ошибка при загрузке фильтра:', error);
            return 'all';
        }
    },

    saveFilter: (filter: FilterType): void => {
        try {
            localStorage.setItem(FILTER_KEY, filter);
        } catch (error) {
            console.error('Ошибка при сохранении фильтра:', error);
        }
    },

    generateId: (): number => {
        return Date.now() + Math.floor(Math.random() * 1000);
    }
};
