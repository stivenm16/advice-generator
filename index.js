let btn = document.querySelector('.dice-container')
let titleWithID = document.querySelector('.title-container')
let mainText = document.querySelector('.main-content')

function response(){
    fetch('https://api.adviceslip.com/advice')
    .then(r => r.json())
    .then(responseJSON => {
        let slip = responseJSON.slip
        titleWithID.textContent = `A D V I C E #${slip.id}`
        mainText.textContent = `"${slip.advice}"`
        }
        ) 
}
response()
btn.addEventListener('click', response)
