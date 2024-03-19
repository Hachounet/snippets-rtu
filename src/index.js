import './style.scss';

function implementDropDownMenu() {
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
}

implementDropDownMenu();
