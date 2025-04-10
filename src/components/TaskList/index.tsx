import { TaskListItem } from "./Item";
import styles from "./style.module.css";
import {useTask} from "../../hooks/useTask";
import {TaskListAddForm} from "./AddForm";
import {TaskListFilter} from "./Filter";

export const TaskList = () => {
    const { tasks, filter } = useTask();

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>
                Список задач
            </h1>
            <TaskListAddForm />
            <TaskListFilter />
            {tasks.length > 0 ? (
                <div className={styles.body}>
                    {tasks.map((task) => (
                        <TaskListItem
                            key={task.id}
                            item={task}
                        />
                    ))}
                </div>
            ) : (
                <div className={styles.empty}>
                    {filter === 'all'
                        ? 'Нет задач'
                        : filter === 'active'
                            ? 'Нет активных задач'
                            : 'Нет выполненных задач'
                    }
                </div>
            )}
        </div>
    );
};