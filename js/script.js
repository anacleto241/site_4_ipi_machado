document.addEventListener('DOMContentLoaded', function() {
    // Update date and time
    function updateDateTime() {
        const now = new Date();
        const dateTimeElements = document.querySelectorAll('.header span:first-child');
        
        const options = { 
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
        };
        
        const formattedDateTime = now.toLocaleDateString('pt-BR', options);
        
        dateTimeElements.forEach(el => {
            el.textContent = formattedDateTime;
        });
    }
    
    updateDateTime();
    setInterval(updateDateTime, 60000); // Update every minute
    
    // Highlight active menu item
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
        
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});