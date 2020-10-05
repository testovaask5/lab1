// var name2 = "John 'Smith'"
// let name = 'Ivan "Drago"'
// name = 'Elena'
// const name3 = 'Jane'
// const hello = "Привет"
// console.log('hello ' + name)
// console.log('hello ' + name2)
// console.log(`${hello} ${name3}!!!!!!!`)

const hello = ['Hello', 'Привет']
const array = ['John', 'Ivan', 'Jane']

for (let helloIndex = 0; helloIndex < hello.length; helloIndex++) {
    for (let index = 0; index < array.length; index++) {
        console.log(hello[helloIndex] + ' ' + array[index])
    }
}

