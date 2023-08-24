import React from 'react';
import { createRoot } from 'react-dom/client';
import UserForm from './userForm';
import UserInfo from './userInfo';

function MyApp() {
    return (
        <>
            <UserForm />
            <UserInfo />
        </>
    );
}

const root = createRoot(document.getElementById('app')!)
root.render(MyApp())