document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav ul');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('show');
            this.innerHTML = nav.classList.contains('show') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.classList.remove('show');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });

    // Handle all /swap navigation
    document.querySelectorAll('a[href="/swap"], a[href^="/swap#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            if (!this.href.endsWith('/swap') && !this.href.includes('/swap#')) return;
            
            e.preventDefault();
            
            // In a real app, you would navigate to your swap interface
            console.log('Navigating to:', this.href);
            
            // For demo purposes, we'll show an alert
            const hash = this.href.split('#')[1] || '';
            const message = hash ? `Redirecting to swap interface and scrolling to ${hash} section` 
                               : 'Redirecting to swap interface';
            alert(message);
            
            // Actual implementation would be:
            // window.location.href = '/swap' + (hash ? `#${hash}` : '');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor.getAttribute('href') === '#') return;
        if (anchor.href.includes('/swap#')) return; // Skip swap anchor links
        
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update URL without page reload
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    location.hash = targetId;
                }
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
        });
    }

    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .chain-item, .stat-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };

    // Initialize animations
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});
