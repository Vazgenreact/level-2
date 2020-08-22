import React, {useEffect, useState} from 'react';
import './App.css';
import Cats from "./components/cats/Cats";
import {getCats} from "./store";

function App() {
    const [cats, setCats] = useState({});
    
    useEffect(() => {
        getCats().then(res => {
            setCats(res);
        });
    }, []);
    
    return (
        <div className="app">
            <div className="homePage">
                <div className="homePage__container">
                    <h1 className="pageTitle">Ты сегодня покормил кота?</h1>
                    
                    {cats.cats
                        ? <Cats cats={cats}/>
                        : <div style={{fontSize: '48px', color: '#fff'}}>Loading ...</div>}
                </div>
            </div>
        </div>
    );
}

export default App;
