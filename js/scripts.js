/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', event => {
    // Dynamic content based on current month
    function showDynamicContent(monthOverride = null) {
        const currentDate = new Date();
        const currentMonth = monthOverride || (currentDate.getMonth() + 1); // getMonth() returns 0-11, so add 1

        // Hide all sections first
        const sections = document.querySelectorAll('.dynamic-section');
        sections.forEach(section => {
            section.style.display = 'none';
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
        });

        // Show appropriate section based on month
        let targetSection = null;
        let sectionName = '';

        if (currentMonth >= 1 && currentMonth <= 3) {
            // January - March: Coming Soon
            targetSection = document.getElementById('coming-soon-section');
            sectionName = 'Coming Soon';
        } else if (currentMonth >= 4 && currentMonth <= 8) {
            // April - August: Server Down for Maintenance
            targetSection = document.getElementById('maintenance-section');
            sectionName = 'Server Down for Maintenance';
        } else if (currentMonth >= 9 && currentMonth <= 12) {
            // September - December: Thank You
            targetSection = document.getElementById('thank-you-section');
            sectionName = 'Thank You';
        }

        if (targetSection) {
            targetSection.style.display = 'block';

            // Add fade-in effect
            setTimeout(() => {
                targetSection.style.transition = 'all 0.5s ease-in-out';
                targetSection.style.opacity = '1';
                targetSection.style.transform = 'translateY(0)';
            }, 100);

            if (monthOverride) {
                console.log(`Showing "${sectionName}" section for month ${currentMonth}`);
            }
        }
    }

    // Function to test different months - can be called from browser console
    function testMonth(monthNumber) {
        if (monthNumber < 1 || monthNumber > 12) {
            console.error('Month number must be between 1 and 12');
            return;
        }

        showDynamicContent(monthNumber);
    }

    // Make testMonth function globally available
    window.testMonth = testMonth;

    // Initialize dynamic content
    showDynamicContent();
});
