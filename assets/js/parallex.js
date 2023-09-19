window.addEventListener('scroll', () => {
    if($(window).width() > 767){
        let title = document.querySelectorAll(".parallax-title");

        title.forEach((el) => {
            let rect = el.getBoundingClientRect();
            let progress = 30 * rect.y / window.innerHeight;
    
            el.style.transform = `translateX(${progress}%)`;
        });
    }else{
        let title = document.querySelectorAll(".parallax-title");

        title.forEach((el) => {
            let rect = el.getBoundingClientRect();
            let progress = 80 * rect.y / window.innerHeight;
    
            el.style.transform = `translateX(${progress}%)`;
        });
    }
    
});
