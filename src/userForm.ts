import { html } from "@modules/lit-html/lit-html.js";

const callback = function () {
    event?.preventDefault()
    console.log('submited')
}

const UserForm = html`
<form @submit="${callback}">
<fieldset>
    <legend>Send us some info</legend>
    <label for="name">Your name</label>
    <input type="text" name="name" placeholder="Your name">
    <input type="submit" value="Submit">
</fieldset>
</form>`;


export default UserForm;