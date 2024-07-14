import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Layout/Header/Header';
import ContactPage from './Pages/ContactPage/ContactPage';
import ServicePage from './Pages/ServicePage/ServicePage';
import ServiceDetailPage from './Pages/ServiceDetailPage/ServiceDetailPage';

function App() {
    return (<>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<div>Home page</div>} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/about' element={<div>about page</div>} />
                <Route path='*' element={<div>Error Page</div>} />
                <Route path="/service" element={<ServicePage />}>
                    <Route path=":serviceId" element={<ServiceDetailPage />} />
                </Route>
                <Route path='/useEffect' element={<div>UseEffect Page</div>} />
            </Routes>
        </BrowserRouter>
    </>
    );
}

export default App;
