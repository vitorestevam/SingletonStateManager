import React, { useEffect } from "react"
import { useState } from 'react';
import UserNameVault from "./vaults/UserNameVault";

function UserInfo() {
    const [userName, setUsername] = useState("");

    useEffect(() => {
        UserNameVault.getInstance().subscribe(setUsername);
    }, [])

    return (
        <section>
            <h1>User info:</h1>
            <p>{userName}</p>
        </section>
    );
}

export default UserInfo;