export function initializeStars() {
    const starsContainer = document.getElementById('home-section');
    if (!starsContainer) return;

    const numStars4 = getRandomInt(15, 30);
    const numStars5 = getRandomInt(5, 10);
    const star4 ='star4.svg';
    const star5 = 'images/star5.svg';
    const star5AC = 'images/star5AC.svg';

    function createStar(stars){
        const star = document.createElement('img');
        star.src=stars;
        star.className = 'animated-star';
        star.style.position = 'absolute';
        star.style.zIndex='-1';

        const sectionWidth = starsContainer.clientWidth;
        const sectionHeight = starsContainer.clientHeight;

        const randomX = getRandomInt(0, sectionWidth);
        const randomY = getRandomInt(0, sectionHeight);

        star.style.left = randomX + 'px';
        star.style.top = randomY + 'px';

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

    function getRandomInt(min, max) {
        return Math.random() * (max - min) + min;
    }

    function addStarsToContainer(container, numStars, stars) {
        for (let i = 0; i < numStars; i++) {
            const star = createStar(stars);
            container.appendChild(star);
        }
    }

    addStarsToContainer(starsContainer, numStars4, star4);
    addStarsToContainer(starsContainer, numStars5, star5);
    addStarsToContainer(starsContainer, numStars5, star5AC);
}
