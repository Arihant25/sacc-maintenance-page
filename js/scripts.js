/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', event => {
    // Dynamic content based on current month
    function showDynamicContent() {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11, so add 1

        // Hide all sections first
        const sections = document.querySelectorAll('.dynamic-section');
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Show appropriate section based on month
        if (currentMonth >= 1 && currentMonth <= 3) {
            // January - March: Coming Soon
            document.getElementById('coming-soon-section').style.display = 'block';
        } else if (currentMonth >= 4 && currentMonth <= 8) {
            // April - August: Server Down for Maintenance
            document.getElementById('maintenance-section').style.display = 'block';
        } else if (currentMonth >= 9 && currentMonth <= 12) {
            // September - December: Thank You
            document.getElementById('thank-you-section').style.display = 'block';
        }

        // Add fade-in effect
        setTimeout(() => {
            const visibleSection = document.querySelector('.dynamic-section[style*="block"]');
            if (visibleSection) {
                visibleSection.style.opacity = '0';
                visibleSection.style.transform = 'translateY(20px)';
                visibleSection.style.transition = 'all 0.5s ease-in-out';

                setTimeout(() => {
                    visibleSection.style.opacity = '1';
                    visibleSection.style.transform = 'translateY(0)';
                }, 100);
            }
        }, 100);
    }

    // Initialize dynamic content
    showDynamicContent();
});
