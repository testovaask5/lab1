// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Success'), 1000)   
//     setTimeout(() => reject('Reject'), 1000)
// })

// callback
// promise.then(message => {
//     console.log(message)
// }).catch(err => {
//     console.log(err)
// })


// function delay(ms, message) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(message), ms)
//     })
// }

// // delay(500).then(() => {
// //     console.log('Step 1')
// //     return delay(1000)
// // }).then(() => {
// //     console.log('Step 2')
// //     return fetch('http://user08.test1.seschool.ru:3000/api/chat/?offset=1&limit=1')
// // }).then((messages) => {
// //     console.log(messages)
// //     return delay(2000)
// // }).then(() => {
// //     console.log('Step 4')
// //     return 'Hello message'
// // }).then((message) => {
// //     console.log('Step 5')
// //     console.log(message)
// // })

// async function start(...params) {
//     // try {
//         console.log(a,b);
//         const mes = await delay(500, 'John')
//         console.log('Hello '+ mes)
//         const response = await fetch('http://user08.test1.seschool.ru:3000/api/chat/?offset=1&limit=1')
//         console.log(response)
//         if (!response.ok) {
//             console.log('Step 2')
//             // throw {message: 'Alarm!!!'}
//             await delay(1500)
//             console.log('Step 3')
//         } else {
//             return Promise.reject({message: 'Alarm!!!'})
//         }
//     // } catch (error) {
//     //     console.error(error)
//     // }
// }

// function errorDecorator(func) {
//     // return function() {
//     //     // console.log(arguments)
//     //     return func.apply(null, arguments).catch(console.log)
//     // }
//     return (...params) => func(...params).catch(console.log)
// }

// const startDec = errorDecorator(start)
// startDec('Hello', 'World')

// // function messageFunc({username = 'John', email, message}) {
// //     console.log(username)
// //     console.log(email)
// //     console.log(message)
// // }

// // const message = 'Hello'
// // messageFunc({email: 'test@email.com', message})

// // setTimeout(() => {
// //     console.log('Step 1')
// //     setTimeout(() => {
// //         console.log('Step 2')
// //         setTimeout(() => {
// //             console.log('Step 3')
// //             setTimeout(() => {
// //                 console.log('Step 4')
// //             }, 2000);
// //         }, 1500);
// //     }, 1000);
// // }, 500);


// // function test(...params) {
// //     // this.a = a
// //     // this.b = b
// //     // this.c = c
// //     console.log(arguments)
// //     console.log(...params);
// //     // console.log(a)
// //     // console.log(b)
// //     // console.log(c)
// // }

// // // console.log(test.apply({}, [2,3,4]))
// // test(3,4,5,5,6,7,8)

// function test(...params) {
//     console.log(params);
// }


// const obj = {a:1, b:3, c:5, d:8}
// const {a,b,c} = obj
// const a = obj.a
// const b = obj.b
// const c = obj.c

function userInfo({username, message, email}) {    
    console.log('username ' + username)
    console.log('email ' + email)
    console.log('message ' + message)
}

userInfo({email: 'test@mail.com', username: 'John', message: 'Hello'})
// userInfo('test@mail.com', 'John', 'Hello')