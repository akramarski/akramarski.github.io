// DROPDOWN MENU
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown'); 

    function showDropdown(event) {
        const dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.style.display = 'block';
    }

    function hideDropdown(event) {
        const dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.style.display = 'none';
    }

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('mouseover', showDropdown);
        dropdown.addEventListener('mouseout', hideDropdown);
    });
});

// HAMBURGER MENU
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const fullPageMenu = document.getElementById('fullPageMenu');
    const closeButton = document.querySelector('.close-btn');


    function toggleMenu() {
        if (fullPageMenu.style.display === 'block') {
            fullPageMenu.style.display = 'none';
        } else {
            fullPageMenu.style.display = 'block';
        }
    }

    hamburger.addEventListener('click', function() {
        toggleMenu();
    });

    closeButton.addEventListener('click', function() {
        toggleMenu();
    });
});