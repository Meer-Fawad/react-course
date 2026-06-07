import React from 'react'
import UserContextProvider from 'src/context/usercontextprovider'
import Login from 'src/components/Login'
import Profile from 'src/components/profille' 
import 'src/index.css'

export default function App() {
    return (
        <>
            <UserContextProvider>
                <h1>We will make a global file where we can access wherever needed</h1>
                <Login />
                <Profile />  
            </UserContextProvider>
        </>
    )
}