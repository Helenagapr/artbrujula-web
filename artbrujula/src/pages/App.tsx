import React, { Suspense } from "react";
import Header from "../components/header";
import { AppRouter } from "../routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import style from '../styles/global.module.scss'; 

export default function App(){
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter> 
                    <Header />
                    <main className={style.container}>
                        <AppRouter />
                    </main>
                </BrowserRouter>  
            </Suspense> 
        </>
    )
}
