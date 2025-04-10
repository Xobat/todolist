import {createContext, useReducer, ReactNode, useEffect, Dispatch} from 'react';
import { themeReducer, getInitialThemeState, ThemeState, ThemeAction } from '../store';

type ThemeContextType = {
    state: ThemeState;
    dispatch: Dispatch<ThemeAction>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(themeReducer, getInitialThemeState());

    useEffect(() => {
        const { theme } = state;
        if (theme === 'dark') {
            document.getElementById('main-app')?.classList.add('dark-theme');
            document.getElementById('main-app')?.classList.remove('light-theme');
        } else {
            document.getElementById('main-app')?.classList.add('light-theme');
            document.getElementById('main-app')?.classList.remove('dark-theme');
        }
    }, [state, state.theme]);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
}