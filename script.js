// const getBtn = document.getElementById('get-btn')
// const getResultElem = document.getElementById('get-result')
const chat = document.getElementById('chat')

fetch('http://user08.test1.seschool.ru:3000/api/chat/').then(response => {
    if (response.ok) return response.json()
    throw new Error('Wrong request')
}).then(messages => {
    // getResultElem.textContent = JSON.stringify(messages, null, 2)
    let resultHtml = ''
    for (const message of messages) {
        resultHtml = resultHtml + `<li>${message.username}: ${message.message}</li>`
        // resultHtml = resultHtml + '<li>' + message.username + ': ' + message.message + '</li>'
    }
    chat.innerHTML = resultHtml
}).catch(err => console.error(err))

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
postBtn.addEventListener('click', () => {
    fetch('http://user08.test1.seschool.ru:3000/api/chat/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer TOKEN'
        },
        body: JSON.stringify({
            username: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        })
    }).then(response => {
        if (response.ok) return response.json()
        throw new Error('Bad request')
    }).then(response => {
        // alert(JSON.stringify(response))
    }).catch(err => {
        console.error(err)
    })
})




// const button = document.getElementById('button') // $('#button')
// // const inputElem = document.getElementById('input') // $('#button')
// // const inputElem2 = document.getElementById('input2')
// // const inputElem3 = document.getElementById('input3')
// // const inputElem4 = document.getElementById('input4')
// // const inputElem5 = document.getElementById('input5')
// const inputElems = document.querySelectorAll('input')

// const divEl = document.querySelector('#inputvalue')

// button.addEventListener('click', function(event) {
//     divEl.textContent = inputElem.value
// })

// const inputListener = function(event) {
//     const elem = event.target
//     divEl.textContent = elem.value
// }

// for (const input of inputElems) {
//     console.log(input)
// }

// let user1 = {
//     name: 'Margo',
//     surname: 'Shitts',
//     address: 'Volg',
//     age: 16,
//     getFullName: getFullName,
    
// }

// let user2 = {
//     name: 'John',
//     surname: 'Smith',
//     address: 'NY',
//     age: 45,
//     getFullName: function () {
//         // const self = this
//         // const callback = function() {
//         //     console.log(self)
//         //     return self.name + ' ' + self.surname
//         // }
//         // return callback()
//         return this.name + ' ' + this.surname
//     },
//     getNameAge() {
//         return this.name + ', ' + this.age
//     },
//     func: function(name) {
//         return 'Hello ' + this.name
//     } 
// }
// user2.func()

// function getFullName() {
//     return this.name + ' ' + this.surname
// }

// class User {
//     constructor(name, surname) {
//         this.name = name
//         this.surname = surname
//         this.func2 = name => {
//             return 'Hello ' + this.name
//         }
//     }
//     getNameAge() {
//         return this.name + ', ' + this.age
//     }
//     getFullName() {
//         return this.name + ' ' + this.surname
//     }
// }

// const john = new User('John', 'Smith')
// const mary = new User('Mary', 'Jones')
// john.getFullName()
// mary.getFullName()


// setTimeout(() => console.log('Time to kill'), 2000)

// let user2 = user

// let func2 = name => {
//     return 'Hello ' + name
// }

// let func2 = function (name) {
//     return 'Hello ' + name
// }


// tpSFqiCtPEJPqDxyOvQ3


// inputElem.addEventListener('input', inputListener)
// inputElem2.addEventListener('input', inputListener)
// inputElem3.addEventListener('input', inputListener)
// inputElem4.addEventListener('input', inputListener)
// inputElem5.addEventListener('input', inputListener)