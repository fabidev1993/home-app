import React, { lazy, Suspense } from 'react'; // Must be imported for webpack to work
import './App.css';

const Header = lazy(() => import('HeaderApp/Header'));
const Fereshteh = lazy(() => import('HeaderApp/Fereshteh'));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<div>Loading Header...</div>}>
                <Header />
            </Suspense>
            <div className="container">Demo home page</div>
            <Suspense fallback={<div>Loading Header...</div>}>
                <Fereshteh />
            </Suspense>
        </div>
    );
}

export default App;