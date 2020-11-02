let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Success'), 1000)   
    setTimeout(() => reject('Reject'), 1000)
})

// callback
promise.then(message => {
    console.log(message)
}).catch(err => {
    console.log(err)
})


function delay(ms, message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(message), ms)
    })
}

// delay(500).then(() => {
//     console.log('Step 1')
//     return delay(1000)
// }).then(() => {
//     console.log('Step 2')
//     return fetch('http://user08.test1.seschool.ru:3000/api/chat/?offset=1&limit=1')
// }).then((messages) => {
//     console.log(messages)
//     return delay(2000)
// }).then(() => {
//     console.log('Step 4')
//     return 'Hello message'
// }).then((message) => {
//     console.log('Step 5')
//     console.log(message)
// })

async function start() {
    try {
        const mes = await delay(500, 'John')
        console.log('Hello '+ mes)
        const message = await fetch('http://user08.test1.seschool.ru:3000/api/chat/?offset=1&limit=1')
        console.log(message)
        console.log('Step 2')
        // throw new Error('Alarm!!!')
        await delay(1500)
        console.log('Step 3')
        await delay(2000)
        console.log('Step 4')
        await delay(2500)
        console.log('Step 5')
    } catch (error) {
        console.error(error)
    }
}

start()

// function messageFunc({username = 'John', email, message}) {
//     console.log(username)
//     console.log(email)
//     console.log(message)
// }

// const message = 'Hello'
// messageFunc({email: 'test@email.com', message})

// setTimeout(() => {
//     console.log('Step 1')
//     setTimeout(() => {
//         console.log('Step 2')
//         setTimeout(() => {
//             console.log('Step 3')
//             setTimeout(() => {
//                 console.log('Step 4')
//             }, 2000);
//         }, 1500);
//     }, 1000);
// }, 500);