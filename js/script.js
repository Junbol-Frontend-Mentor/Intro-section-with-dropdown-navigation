document.addEventListener('DOMContentLoaded', function () {
  // when the index.html page is loaded do this:
  console.log('JavaScript file is connected');

  // Select all dropdown toggle buttons
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {//❓🚩here there is "event" added inside () --which makes this an anonymous arrow functon--  because:
      // Find the next sibling element which is the dropdown menu
      const dropdownMenu = toggle.nextElementSibling;

      // Toggle the 'hidden' class to show or hide the dropdown menu
      if (dropdownMenu.classList.contains('hidden')) {
        // Hide any open dropdown menus before showing the new one
        document.querySelectorAll('.dropdown-menu').forEach((menu) => {
          menu.classList.add('hidden');
        });

        dropdownMenu.classList.remove('hidden');//show the menu clicked
      } else {
        dropdownMenu.classList.add('hidden');
      }
    });
  });

     // Clicking outside of an open dropdown menu closes it
     window.addEventListener("click", function (e) {//❓🚩here there is "event" added inside () -- which makes this into a named arrow function --  because:
      if (!e.target.matches(".dropdown-toggle")) {
        document.querySelectorAll(".dropdown-menu").forEach((menu) => {
          if (!menu.contains(e.target)) {//❓
            menu.classList.add("hidden")
          }
        })
      }
    })

        // Mobile menu toggle
    
        const mobileMenuButton = document.querySelector('.mobile-menu-button')
        const mobileMenu = document.querySelector('.navigation-menu')
        
        mobileMenuButton.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden')
        })

  // Existing hamburger menu functionality
  // const btn = document.getElementById('menu-btn');
  // const nav = document.getElementById('menu');

  /*   btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
  }); */
});
