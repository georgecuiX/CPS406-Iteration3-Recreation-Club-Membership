import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './pages/WelcomeScreen';
import RegistrationScreen from './pages/RegistrationScreen'
import { Login } from './pages/Login';
import { AdminLogin } from './pages/AdminLogin';

export const WebRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<WelcomeScreen />} />
                <Route path='/login' element={<Login />} />
                <Route path='/admin' element={<AdminLogin />} />
                <Route path='/register' element={<RegistrationScreen />} />
                <Route path='*' element={<h1>Page not found</h1>} /> {/* Catch all other paths */}
            </Routes>
        </Router>
    );
};