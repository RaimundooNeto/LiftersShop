import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { Checkout } from './pages/Checkout';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details' element={<Details />} />
            <Route path='/checkout' element={<Checkout />}/>
        </Routes>
    );
}