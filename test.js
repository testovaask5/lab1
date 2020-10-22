let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Success'), 2000)   
    setTimeout(() => reject('Reject'), 1000)
})

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

delay(500).then(() => {
    console.log('Step 1')
    return delay(1000)
}).then(() => {
    console.log('Step 2')
    return delay(1500)
}).then(() => {
    console.log('Step 3')
    return delay(2000)
}).then(() => {
    console.log('Step 4')
    return 'Hello message'
}).then((message) => {
    console.log('Step 5')
    console.log(message)
})

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