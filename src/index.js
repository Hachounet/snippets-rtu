import './style.scss';

// eslint-disable-next-line no-unused-vars
/* function implementDropDownMenu() {
  const dropDownBtns = document.querySelectorAll('.dropdown-button');
  dropDownBtns.forEach((button) => {
    const dropDownOptions = button.nextElementSibling;

    // eslint-disable-next-line func-names
    const toggleDropDown = function () {
      dropDownOptions.classList.toggle('visible');
    };
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDropDown();
    });

    document.documentElement.addEventListener('click', () => {
      if (dropDownOptions.classList.contains('visible')) {
        toggleDropDown();
      }
    });
  });
} */

function implementPhoneDropDownMenu() {
  const MenuPhoneBtn = document.getElementById('menu-btn-phone');

  // eslint-disable-next-line func-names
  const toggleDropDown = function () {
    const menuOptions = document.querySelector('.dropdown-options');
    menuOptions.classList.toggle('visible');
  };
  MenuPhoneBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropDown();
  });

  document.documentElement.addEventListener('click', () => {
    const menuOptions = document.querySelector('.dropdown-options');
    if (menuOptions.classList.contains('visible')) {
      toggleDropDown();
    }
  });
}

implementPhoneDropDownMenu();
