const sliderButtonContainer = document.querySelector('.photo__slider_button')
const sliderView = document.querySelector('.slider_view')
console.log(sliderView);
const img = [
    {
        src: 'img/firstBlock/brownCoffee2.png'
    },
    {
        src: 'img/firstBlock/greenCoffee2.png'
    },
    {
        src: 'img/firstBlock/bodilyCoffee2.png'
    },
]
const imgView = [
    {
        src: 'img/firstBlock/brownCoffee1.png'
    },
    {
        src: 'img/firstBlock/greenCoffee1.png'
    },
    {
        src: 'img/firstBlock/bodilyCoffee1.png'
    },
]
for (let i=0; i<img.length; i++) {
    const sliderButton = document.createElement('img')
    sliderButton.setAttribute('src', img[i]['src'])
    sliderButtonContainer.appendChild(sliderButton)
    sliderButtonContainer.children[i].classList.add('deactive')

}
sliderButtonContainer.children[1].classList.remove('deactive')
const sliderButtonDeactive = () => {
    for (let i = 0; i < sliderButtonContainer.children.length; i++) {
        sliderButtonContainer.children[i].classList.add('deactive')
        
    }
}
for (let i = 0; i < sliderButtonContainer.children.length; i++) {
    sliderButtonContainer.children[i].addEventListener('click', (e) => {
        sliderButtonDeactive()
        e.target.classList.remove('deactive')
        const target = e.target
        console.log(sliderView.__proto__);
        e.target.attributes[0].value == img[0]['src'] ? sliderView.attributes[1].value = imgView[0]['src'] : '';
        e.target.attributes[0].value == img[1]['src'] ? sliderView.attributes[1].value = imgView[1]['src'] : '';
        e.target.attributes[0].value == img[2]['src'] ? sliderView.attributes[1].value = imgView[2]['src'] : '';
    })
    
}

