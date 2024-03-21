import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { Checkout } from './pages/Checkout';
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/details' element={<Details />} />
                <Route path='/checkout' element={<Checkout />}/>
            </Route>
        </Routes>
    );
}