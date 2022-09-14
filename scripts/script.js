const headerImage = document.querySelector('.HeaderImage');
const scrollableWindow = document.querySelector('.Home');


const revealImage = (e) => {
    const scrollPosition =  e.target.scrollTop;
    const scrollHeight = 200;
    if(scrollPosition > scrollHeight) {
        headerImage.classList.add('makeVisible')
        scrollableWindow.removeEventListener('scroll', revealImage);
    }
}

scrollableWindow.addEventListener('scroll', revealImage);
