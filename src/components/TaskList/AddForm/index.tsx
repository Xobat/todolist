import React, { useState } from 'react';
import { Button } from '../../../ui-kit';
import { useTask } from '../../../hooks';
import styles from './style.module.css';

export const TaskListAddForm = () => {
    const [title, setTitle] = useState('');
    const {addTask} = useTask();

    const addTaskHandler = (e: React.FormEvent<HTMLFormElement>, title: string) => {
        e.preventDefault();
        addTask(title)
        setTitle('');
    }

    return (
        <form className={styles.form} onSubmit={(e) => addTaskHandler(e, title)}>
            <input
                maxLength={240}
                type="text"
                className={styles.input}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Введите новую задачу"
                required
            />
            <Button
                title="Добавить"
                variant="default"
                type="submit"
            />
        </form>
    );
};