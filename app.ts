import { html, render } from "@modules/lit-html/lit-html.js"

import UserForm from './src/userForm.js'
import UserInfo from './src/userInfo.js'

const foo = html`<h1>Hello back</h1>`

let myTemplate = (data: { title: string; body: any; }) => html`
    <h1>${data.title}</h1>
    <p>${data.body}</p>
    ${foo}
    `;

const app = html`
<div>
    ${UserForm}
    ${UserInfo}
</div>
`

render(app, document.getElementById('app')!)

// Path: script.jsx