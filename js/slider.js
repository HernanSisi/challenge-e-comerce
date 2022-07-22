function changeSlider(event) {
    // console.log(event);
    let activo = document.querySelector('.slider__card--active');
    activo.classList.remove('slider__card--active');
    event.classList.add('slider__card--active');
}