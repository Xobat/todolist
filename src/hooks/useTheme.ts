import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { ThemeType } from '../services/themeStorage';

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
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