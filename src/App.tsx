import React from 'react';
import { TaskList } from './components/TaskList';
import { TaskProvider } from './context/TaskContext';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import './index.css';

function App() {
    const theme = localStorage.getItem('todo_theme');
    const browserTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    const actualTheme = theme ? theme : browserTheme;

    return (
        <ThemeProvider>
            <TaskProvider>
                <div id="main-app" className={`app ${actualTheme}-theme`}>
                    <div className="toggle-button">
                        <ThemeToggle />
                    </div>
                    <main>
                        <TaskList />
                    </main>
                </div>
            </TaskProvider>
        </ThemeProvider>
    );
}

export default App;