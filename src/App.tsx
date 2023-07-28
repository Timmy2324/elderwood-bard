import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Suspense, useContext } from 'react';
import { AboutPageAsync } from './AboutPage/AboutPageAsync';
import { MainPageAsync } from './MainPage/MainPageAsync';
import { useTheme } from './theme/useTheme';

const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Chenge theme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPageAsync/>} />
                    <Route path='/' element={<MainPageAsync/>} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;