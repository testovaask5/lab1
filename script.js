const button = document.getElementById('button') // $('#button')

button.addEventListener('click', function(event) {
    
})

const input = document.getElementById('input') // $('#button')

input.addEventListener('input', function(event) {
    const elem = event.target
    console.log(elem.value)
})