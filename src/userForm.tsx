import React from "react"
import UserNameVault from "./vaults/UserNameVault";

function UserForm() {
    const submitHandler: React.FormEventHandler = (event) => {
        event?.preventDefault();
        const data = new FormData(event.target as HTMLFormElement);

        UserNameVault.getInstance().setUserName(data.get("name") as string);
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <fieldset>
                    <legend>Send us some info</legend>
                    <label htmlFor="name">Your name</label>
                    <input type="text" name="name" placeholder="Your name" />
                    <input type="submit" value="Submit" />
                </fieldset>
            </form>
        </>);
}

export default UserForm;
