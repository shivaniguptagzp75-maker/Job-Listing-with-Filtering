const jobCards = document.querySelectorAll('.container-A');
const filterTags = document.querySelectorAll('.lang');

filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
        const filterValue = tag.innerText.toLowerCase();

        jobCards.forEach(card => {
            const cardLanguages = card.querySelector('.language').innerText.toLowerCase();

        
            if (cardLanguages.includes(filterValue)) {
                card.style.display = 'flex'; 
            } else {
                card.style.display = 'none'; 
            }
        });
    });
});