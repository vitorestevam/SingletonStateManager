import React from "react"
import { useState } from 'react';

function UserInfo() {
    const [userName, setUsername] = useState("");

    return (
        <section>
            <h1> User info: </h1>
            <p>{userName}</p>
        </section>
    );
}

export default UserInfo;