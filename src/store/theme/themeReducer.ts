import { themeStorage, ThemeType, ThemeAction } from './';

export type ThemeState = {
    theme: ThemeType;
};

export const getInitialThemeState = (): ThemeState => {
    return {
        theme: themeStorage.getTheme()
    };
}

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case 'SET_THEME':
            const newTheme = action.payload.theme;
            themeStorage.saveTheme(newTheme);
            return {
                ...state,
                theme: newTheme
            };

        case 'TOGGLE_THEME':
            const toggledTheme = state.theme === 'light' ? 'dark' : 'light';
            themeStorage.saveTheme(toggledTheme);
            return {
                ...state,
                theme: toggledTheme
            };

        default:
            return state;
    }
}