let imgs = document.querySelectorAll("img");

let observer = new IntersectionObserver(function(entries, observer) {

    entries.forEach(function (entry) {
        if(entry.isIntersecting){
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add("loaded");
            observer.unobserve;
        }
    });

}, {
    root: null, 
    threshold: 0.1,
});


imgs.forEach(function (img) {
    observer.observe(img);
});