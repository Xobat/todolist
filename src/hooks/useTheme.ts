import { useContext } from 'react';
import { ThemeType } from '../store';
import { ThemeContext } from '../context';

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme должен использоваться вместе с ThemeProvider');
    }

    const { state, dispatch } = context;

    const setTheme = (theme: ThemeType) => {
        dispatch({
            type: 'SET_THEME',
            payload: { theme }
        });
    };

    const toggleTheme = () => {
        dispatch({
            type: 'TOGGLE_THEME'
        });
    };

    return {
        theme: state.theme,
        setTheme,
        toggleTheme,
        isDark: state.theme === 'dark'
    };
}