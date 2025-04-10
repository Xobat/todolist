import React from 'react';
import { useTask } from '../../../hooks/useTask';
import styles from './style.module.css';

export const TaskListFilter = () => {
    const { filter, setFilter } = useTask();

    return (
        <div className={styles.container}>
            <div
                className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}
                onClick={() => setFilter('all')}
            >
                Всё
            </div>

            <div
                className={`${styles.filterButton} ${filter === 'completed' ? styles.active : ''}`}
                onClick={() => setFilter('completed')}
            >
                Выполнено
            </div>

            <div
                className={`${styles.filterButton} ${filter === 'active' ? styles.active : ''}`}
                onClick={() => setFilter('active')}
            >
                Активно
            </div>
        </div>
    );
};