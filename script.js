document.addEventListener('DOMContentLoaded', function() {

    // For the stars background
    const starsContainer = document.getElementById('home-section');
    const numStars4 = getRandomInt(15, 30);
    const numStars5 = getRandomInt(5, 10);
    const star4 ='star4.svg';
    const star5 = 'images/star5.svg';
    const star5AC = 'images/star5AC.svg';

    // For the motion path of kirby
    const kirby = document.querySelector('#kirby-svg');

    // For the navbar
    const nav_menu = document.getElementById('nav-bar');
    const nav_toggle = document.querySelector('.nav-toggle')
    const nav_links = document.querySelectorAll('.nav-item a')

    // For the project section
    const projectCards = document.querySelectorAll('.project-card');
    const sun = document.getElementById('sun');

    // For contact section
    const contact = document.querySelectorAll('.contact-card')


    // Add stars
    function createStar(stars){
        const star = document.createElement('img');
        star.src=stars;
        star.className = 'animated-star';
        star.style.position = 'absolute';
        star.style.zIndex='-1';

        // create random positions
        const sectionWidth = starsContainer.clientWidth;
        const sectionHeight = starsContainer.clientHeight;

        const randomX = getRandomInt(0, sectionWidth);
        const randomY = getRandomInt(0, sectionHeight);

        star.style.left = randomX + 'px'; // Random horizontal position
        star.style.top = randomY + 'px'; // Random vertical position

        star.style.left = randomX + 'px'; // Random horizontal position
        star.style.top = randomY + 'px'; // Random vertical position

        // create random sizes
        let size = 0;
        if(stars==='star4.svg'){
            size = getRandomInt(50, 100);
        } else {
            size = getRandomInt(25, 50);
        }
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        return star;
    }

    // Generate a random numbers
    function getRandomInt(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Function to add stars to the container
    function addStarsToContainer(container, numStars, stars) {
        for (let i = 0; i < numStars; i++) {
            const star = createStar(stars);
            container.appendChild(star);
        }
    }

    // Add stars to the stars container
    addStarsToContainer(starsContainer, numStars4, star4);
    addStarsToContainer(starsContainer, numStars5, star5);
    addStarsToContainer(starsContainer, numStars5, star5AC);

    // Navigation
    nav_toggle.addEventListener('click', function() {
        nav_toggle.classList.toggle('active');
        nav_menu.classList.toggle('active');
    })

    nav_links.forEach(link => {
        link.addEventListener('click', function() {
            nav_menu.classList.remove('active');
            nav_toggle.classList.remove('active');
        })
    })

    // Kirby!
    kirby.addEventListener("mouseover", function(){
        kirby.classList.add('kirby-move')
        console.log('Kirby added');
    })

    kirby.addEventListener('animationend', function (){
        kirby.classList.remove('kirby-move');
        console.log('Kirby bye');
    })

    const options = {
        root: null,
        threshold: 0.6
    };

    function inScreen(animation){
        return new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animation);
                    console.log("Intersecting... : " + animation.toString())
                } else {
                    console.log("Not Intersecting...");
                }
            })
        }, options)
    }

    projectCards.forEach(card => {
        inScreen('fade-in-left').observe(card);
    })

    inScreen('fade-in-left').observe(sun);

    contact.forEach(contact => {
        inScreen('fade-in').observe(contact);
    })
});