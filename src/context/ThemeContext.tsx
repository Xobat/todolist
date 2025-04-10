import React, { createContext, useReducer, ReactNode, useEffect } from 'react';
import { themeReducer, getInitialThemeState, ThemeState } from '../store/theme/themeReducer';

type ThemeContextType = {
    state: ThemeState;
    dispatch: React.Dispatch<any>;
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