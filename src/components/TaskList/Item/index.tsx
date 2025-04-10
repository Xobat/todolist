import { Button } from "../../../ui-kit/Button";
import styles from "./style.module.css";
import {useTask} from "../../../hooks/useTask";

export type TaskListItemType = {
    id: number;
    title: string;
    isDone: boolean;
}

type TaskListItemProps = {
    item: TaskListItemType;
}

export const TaskListItem = ({ item }: TaskListItemProps) => {
    const { removeTask, toggleTaskStatus } = useTask();

    return (
        <div className={styles.row}>
            <div className={`${styles.cell} ${styles.cellStatus}`}>
                <Button
                    title={item.isDone ? '✅' : '❌'}
                    onClick={() => toggleTaskStatus(item.id, !item.isDone)}
                />
            </div>
            <div title={item.title} className={`${styles.cell} ${styles.cellTitle}`}>
                <span>{item.title}</span>
            </div>
            <div className={`${styles.cell} ${styles.cellActions}`}>
                <div className={styles.control}>
                    <Button
                        variant="default"
                        title="Удалить"
                        onClick={() => removeTask(item.id)}
                    />
                </div>
            </div>
        </div>
    );
}