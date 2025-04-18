// Enhanced JavaScript with animations and better UX
document.addEventListener('DOMContentLoaded', function() {
    // Initialize filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Gallery items with animation
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100);
    });

    // Lightbox functionality
    const images = document.querySelectorAll('.gallery-card');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const lightboxDate = document.getElementById('lightbox-date');
    const lightboxLocation = document.getElementById('lightbox-location');

    images.forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            const imgSrc = this.querySelector('img').src;
            const overlayContent = this.querySelector('.overlay-content');
            
            lightboxImg.src = imgSrc;
            lightboxTitle.textContent = overlayContent.querySelector('h3').textContent;
            lightboxDesc.textContent = overlayContent.querySelector('p').textContent;
            
            const meta = overlayContent.querySelector('.photo-meta');
            lightboxDate.innerHTML = meta.children[0].innerHTML;
            lightboxLocation.innerHTML = meta.children[1].innerHTML;
            
            lightbox.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });
});

function filterGallery(category) {
    const items = document.querySelectorAll('.item');
    
    items.forEach((item, index) => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
            // Add animation delay based on index
            item.style.transitionDelay = `${index * 0.1}s`;
        } else {
            item.style.display = 'none';
        }
    });
}

function closeLightbox(event) {
    if (event) {
        event.stopPropagation();
        // Only close if clicking on the overlay or close button
        if (event.target.classList.contains('lightbox') || 
            event.target.classList.contains('close-btn') ||
            event.target.closest('.close-btn')) {
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    }
}