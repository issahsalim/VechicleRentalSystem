document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    const Greeting = document.querySelector('.preloaderBehaviour');
    const text = `LATIFA YOUR HEAD LIKE MANGO`;
    let i = 0;

    const renderIntro = () => {
        if (i < text.length) {
            Greeting.innerHTML += text.charAt(i);
            i++;
            setTimeout(renderIntro, 100);
        } else {
            setTimeout(() => {
                preloader.classList.add('preloader_Remover');
                setTimeout(() => {
                    preloader.style.display = 'none';  
                }, 700);  
            }, 1000);
        }
    };

    renderIntro();
});
