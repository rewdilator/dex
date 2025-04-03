document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav ul');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Connect wallet button simulation
    const connectWalletBtn = document.getElementById('connect-wallet');
    if (connectWalletBtn) {
        connectWalletBtn.addEventListener('click', function(e) {
            if (this.href.endsWith('/swap')) {
                // Allow default behavior for swap link
                return;
            }
            e.preventDefault();
            this.textContent = '0x7f...3a4b';
            this.classList.add('connected');
            // In a real app, you would add wallet connection logic here
        });
    }
    
    // Handle all navigation links to /swap
    document.querySelectorAll('a[href="/swap"], a[href="/swap#features"], a[href="/swap#chains"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // In a real app, this would navigate to your swap interface
            // For this demo, we'll just prevent default and log
            e.preventDefault();
            console.log('Navigating to swap interface:', this.href);
            // window.location.href = '/swap' + (this.hash || '');
        });
    });
    
    // Add animation class when elements come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .chain-item, .cta-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
});
