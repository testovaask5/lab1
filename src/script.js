import {hello} from './service.js'

hello()

const chat = document.getElementById('chat')

async function getMessages() {
    try {
        const response = await fetch('http://user08.test1.seschool.ru:3000/api/chat/')
        if (response.ok) {
            const messages = await response.json()
            let resultHtml = ''
            for (const message of messages) {
                resultHtml += `<li>${message.username}: ${message.message}</li>`
            }
            chat.innerHTML = resultHtml
        } else throw new Error('Wrong request')
    } catch (error) {
        console.error(error)
    }
}

getMessages()

const evtSource = new EventSource("http://user08.test1.seschool.ru:3000/api/chat/subscribe");
evtSource.onmessage = function (event) {
    const newMessage = JSON.parse(event.data)
    const newMessageElem = document.createElement("li");
    newMessageElem.innerHTML = `${newMessage.username}: ${newMessage.message}`;
    chat.insertBefore(newMessageElem, chat.firstChild)
}

const postBtn = document.getElementById('post-btn')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')
postBtn.addEventListener('click', async () => {
    fetch('http://user08.test1.seschool.ru:3000/api/chat/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer tpSFqiCtPEJPqDxyOvQ3'
        },
        body: JSON.stringify({
            username: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        })
    }).then(response => {
        // if (response.ok) 
        return response.json()
        // throw new Error('Bad request')
    }).then(response => {
        // alert(response.error)
        if (response.error) return Promise.reject(response)
    }).catch(err => {
        console.log(err)
    })
})
