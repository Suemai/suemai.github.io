export function initializeAnimations() {
    // Kirby animation
    const kirby = document.querySelector('#kirby-svg');
    if (kirby) {
        kirby.addEventListener("mouseover", function(){
            kirby.classList.add('kirby-move');
        });

        kirby.addEventListener('animationend', function (){
            kirby.classList.remove('kirby-move');
        });
    }

    // Intersection Observer for fade-in/out effects
    const animatedElements = document.querySelectorAll('.project-card, #sun, .contact-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.7) {
                entry.target.classList.add('is-visible');
                entry.target.dataset.fullyVisible = 'true';
            } else if (entry.intersectionRatio < 0.7 && entry.target.dataset.fullyVisible === 'true') {
                entry.target.classList.remove('is-visible');
            } else if (entry.intersectionRatio >= 0.1) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, {
        threshold: [0.1, 0.7]
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Lazy loading for images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                image.src = image.dataset.src;
                image.removeAttribute('data-src');
                observer.unobserve(image);
            }
        });
    });

    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });
}
