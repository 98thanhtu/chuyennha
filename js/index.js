document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (track && prevBtn && nextBtn) {
        const getSlideWidth = () => track.querySelector('.carousel-slide').clientWidth;

        const scrollNext = () => {
            const slideWidth = getSlideWidth();
            // Check if we are near the end (allow some tolerance)
            if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
                track.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                track.scrollBy({ left: slideWidth, behavior: 'smooth' });
            }
        };

        const scrollPrev = () => {
            const slideWidth = getSlideWidth();
            track.scrollBy({ left: -slideWidth, behavior: 'smooth' });
        };

        prevBtn.addEventListener('click', () => {
            scrollPrev();
            resetAutoPlay();
        });

        nextBtn.addEventListener('click', () => {
            scrollNext();
            resetAutoPlay();
        });

        // Auto-play functionality
        let autoPlayInterval = setInterval(scrollNext, 5000);

        const resetAutoPlay = () => {
            clearInterval(autoPlayInterval);
            autoPlayInterval = setInterval(scrollNext, 5000);
        };

        // Optional: Pause on hover
        track.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
        track.addEventListener('mouseleave', () => resetAutoPlay());
    }
});
