let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();





// Get references to elements
const accountIcon = document.getElementById('accountIcon');
const loginForm = document.getElementById('login-form');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');

const createAccountLink = document.getElementById('create-account-link');
const createAccountContainer = document.getElementById('create-account-container');
const resetPasswordLink = document.getElementById('reset-password-link');
const resetPasswordForm = document.getElementById('reset-password-form');
const resetCloseBtn = document.getElementById('reset-close-btn');
const createCloseBtn = document.getElementById('create-close-btn'); // New close button reference

// Function to toggle login form visibility
function toggleLoginForm() {
    loginForm.classList.toggle('show');
    overlay.classList.toggle('show');
}

// Event listener for account icon click
accountIcon.addEventListener('click', toggleLoginForm);

// Event listener for close button click in login form
closeBtn.addEventListener('click', toggleLoginForm);

// Event listener for create account link click
createAccountLink.addEventListener('click', function(e) {
    e.preventDefault();
    loginForm.classList.remove('show');
    createAccountContainer.style.display = 'block';
});

// Event listener for reset password link click
resetPasswordLink.addEventListener('click', function(e) {
    e.preventDefault();
    loginForm.classList.remove('show');
    resetPasswordForm.classList.add('show');
});

// Event listener for close button in reset password form
resetCloseBtn.addEventListener('click', function() {
    resetPasswordForm.classList.remove('show');
    loginForm.classList.add('show');
});

// Event listener for close button in create account form
createCloseBtn.addEventListener('click', function() {
    createAccountContainer.style.display = 'none';
    loginForm.classList.add('show');
});


// Event listener for account icon click
accountIcon.addEventListener('click', toggleLoginForm);

// Event listener for close button click
closeBtn.addEventListener('click', toggleLoginForm);




// for viewmore button


document.getElementById('viewMoreBtn').addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.item.hidden');
    hiddenItems.forEach(item => {
        item.classList.remove('hidden');
    });
    this.style.display = 'none';
});





// search functionality
// const categories = {
//     women: [
//         { name: 'Daily Wear', page: 'women.html' },
//         { name: 'Formal', page: 'women.html' },
//         { name: 'Western Wear', page: 'women-westernwear.html' },
//         { name: 'Eastern', page: 'women-eastern.html' }
//     ],
//     men: [
//         { name: 'Ethereal', page: 'men.html' },
//         { name: 'Kurtas', page: 'men.html' },
//         { name: 'Western', page: 'men.html' },
//         { name: 'Active Wear', page: 'men.html' }
//     ],
//     kids: [
//         { name: 'Girls', page: 'kids.html' },
//         { name: 'Boys', page: 'kids.html' }
//     ]
// };

// function performSearch() {
//     const query = document.getElementById('searchInput').value.toLowerCase();
//     const resultsContainer = document.getElementById('searchResults');
//     resultsContainer.innerHTML = ''; // Clear previous results

//     for (const [category, subcategories] of Object.entries(categories)) {
//         subcategories.forEach(subcategory => {
//             if (subcategory.name.toLowerCase().includes(query)) {
//                 const itemElement = document.createElement('div');
//                 itemElement.className = 'search-item';
//                 itemElement.innerHTML = `
//                     <h3>${subcategory.name}</h3>
//                     <button onclick="navigateToCategory('${subcategory.page}')">View ${subcategory.name}</button>
//                 `;
//                 resultsContainer.appendChild(itemElement);
//             }
//         });
//     }
// }

// function navigateToCategory(page) {
//     window.location.href = page;
// }

// // Toggle search input visibility
// document.getElementById('searchIcon').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent default link behavior
//     const searchInput = document.getElementById('searchInput');
//     const resultsContainer = document.getElementById('searchResults');

//     // Toggle the visibility of the search input and results container
//     if (searchInput.style.display === 'none') {
//         searchInput.style.display = 'block';
//         searchInput.focus();
//         resultsContainer.style.display = 'block';
//     } else {
//         searchInput.style.display = 'none';
//         resultsContainer.style.display = 'none';
//     }
// });

const categories = {
    women: [
        { name: 'Woman Daily Wear', page: 'women.html' },
        { name: ' Woman Formal', page: 'women.html' },
        { name: 'Woman Western Wear', page: 'women-westernwear.html' },
        { name: 'Woman Eastern', page: 'women-eastern.html' },
        { name: 'Gharara', page: 'women-eastern.html' },
        { name: 'Woman kurtas', page: 'women-eastern.html' },
        { name: 'Gowns', page: 'women-eastern.html' },
        { name: 'Woman Jeans', page: 'women-westernwear.html' },
        { name: ' Woman Blazer', page: 'women-westernwear.html' },
        { name: 'Woman Shirts', page: 'women-westernwear.html' },
    ],
    men: [
        { name: 'Man Ethereal', page: 'men.html' },
        { name: 'Man Kurtas', page: 'men.html' },
        { name: 'Man Suits', page: 'men.html' },
        { name: 'Man Active Wear', page: 'men.html' }
    ],
    kids: [
        { name: 'Kids Girls', page: 'kids.html' },
        { name: 'Kids Girls Eastern', page: 'kids.html' },
        { name: 'Kids Girls Western', page: 'kids.html' },
        { name: ' Kids Boys', page: 'kids.html' },
        { name: ' Kids Boys Eastern', page: 'kids.html' },
        { name: ' Kids Boys Western', page: 'kids.html' },
    ]
};

function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (query === '') {
        resultsContainer.style.display = 'none';
        return;
    }

    resultsContainer.style.display = 'block';
    let resultsFound = false;

    for (const [category, subcategories] of Object.entries(categories)) {
        if (category.toLowerCase().includes(query)) {
            subcategories.forEach(subcategory => {
                const itemElement = document.createElement('div');
                itemElement.className = 'search-item';
                itemElement.innerHTML = `<a href="${subcategory.page}">${subcategory.name}</a>`;
                resultsContainer.appendChild(itemElement);
                resultsFound = true;
            });
        } else {
            subcategories.forEach(subcategory => {
                if (subcategory.name.toLowerCase().includes(query)) {
                    const itemElement = document.createElement('div');
                    itemElement.className = 'search-item';
                    itemElement.innerHTML = `<a href="${subcategory.page}">${subcategory.name}</a>`;
                    resultsContainer.appendChild(itemElement);
                    resultsFound = true;
                }
            });
        }
    }

    if (!resultsFound) {
        resultsContainer.innerHTML = '<div class="search-item">No results found</div>';
    }
}