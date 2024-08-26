// script.js
// document.addEventListener('DOMContentLoaded', function () {
//     const faqItems = document.querySelectorAll('.faq-item');

//     faqItems.forEach(item => {
//         const question = item.querySelector('.faq-question');
//         const answer = item.querySelector('.faq-answer');
//         const toggleButton = question.querySelector('.toggle-button');

//         question.addEventListener('click', () => {
//             const isOpen = answer.style.display === 'block';
//             answer.style.display = isOpen ? 'none' : 'block';
//             toggleButton.textContent = isOpen ? '+' : '-';
//         });
//     });
// });
// scripts.js

// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.policy-button');
    const infoSections = document.querySelectorAll('.policy-info');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            // Hide all sections
            infoSections.forEach(section => section.classList.remove('active'));

            // Show the clicked section
            targetSection.classList.add('active');
        });
    });
});

