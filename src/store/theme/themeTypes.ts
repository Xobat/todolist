export type ThemeType = 'light' | 'dark';

export type ThemeAction =
    | { type: 'SET_THEME'; payload: { theme: ThemeType } }
    | { type: 'TOGGLE_THEME' };