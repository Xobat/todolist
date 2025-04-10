import { ThemeType } from './';
const THEME_KEY = 'todo_theme';

export const themeStorage = {
    getTheme: (): ThemeType => {
        try {
            const theme = localStorage.getItem(THEME_KEY);
            if (!theme) {
                return window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light';
            }
            return theme as ThemeType;
        } catch (error) {
            console.error('Ошибка при загрузке темы:', error);
            return 'light';
        }
    },

    saveTheme: (theme: ThemeType): void => {
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch (error) {
            console.error('Ошибка при сохранении темы:', error);
        }
    }
};