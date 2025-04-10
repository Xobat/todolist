import style from './Button.module.css';

type ButtonProps = {
    title: string;
    onClick?: () => void;
    variant?: 'default' | 'invisible';
    type?: 'submit' | 'button'
}
export const Button = ({title, onClick, variant = 'invisible', type = 'button'}: ButtonProps) => {
    return <button type={type} className={`${style.button} ${variant === 'default' ? style.defaultButton : style.invisibleButton}`} onClick={onClick}>
        {title}
    </button>
}