/********** Sandwich Menu ********/
document.querySelector('.sandwichContainer').addEventListener('click', sandwichMenu)
document.querySelector('.menu').addEventListener('click', closeSandwichMenu)

function sandwichMenu(x) {
    x.classList.toggle("change");
    let menuDisplay = document.querySelector('.mobileMenuContainer')
    if (menuDisplay.style.display === 'block') {
      menuDisplay.style.display = 'none'
    } else {
      menuDisplay.style.display = 'block'
    }
  }

  function closeSandwichMenu() {
    document.querySelector('.sandwichContainer').classList.toggle("change");
    if (window.matchMedia("(min-width:1200px)")) {
      document.querySelector('.mobileMenuContainer').style.display = 'inline-block';
    } 
    document.querySelector('.mobileMenuContainer').style.display = 'none';
  }

 /* Bug to fix if there is time -- 
 When sandwich menu is closed in mobile view, and page is resized, menu items do not reappear
 I would need to add an event listener on the media query to restore menu items when resized. */