export class Popup {
  constructor(container, form, buttonMenu) {
    this.container = container;
    this.form = form;
    this.buttonMenu = buttonMenu;
  }

  open() {
    if (this.container.id === 'popup-signup') {
      // Сброс значений инпутов
      this.form.reset();
      // Удаление ошибок
      this.deleteErrors();
      this.container.classList.add('popup_is-opened');
      this.container.querySelector('.popup__close').addEventListener('click', this.close.bind(this));
      this.container.querySelector('.popup__link').addEventListener('click', this.close.bind(this));
      this.container.querySelector('.popup__button_signup').addEventListener('click', this.close.bind(this));
      this.buttonMenu.style.opacity = 0;
      this.form.elements.submit.disabled = true;
      this.form.elements.submit.classList.remove('popup__button_active');
    } else if (this.container.id === 'popup-success') {
      this.container.classList.add('popup_is-opened');
      this.container.querySelector('.popup__close').addEventListener('click', this.close.bind(this));
      this.container.querySelector('.popup__link').addEventListener('click', this.close.bind(this));
    } else if (this.container.id === 'popup-login') {
      // Сброс значений инпутов
      this.form.reset();
      // Удаление ошибок
      this.deleteErrors();
      this.container.classList.add('popup_is-opened');
      this.container.querySelector('.popup__close').addEventListener('click', this.close.bind(this));
      this.container.querySelector('.popup__link').addEventListener('click', this.close.bind(this));
      this.buttonMenu.style.opacity = 0;
      this.form.elements.submit.disabled = true;
      this.form.elements.submit.classList.remove('popup__button_active');
    }
  }

  close(event) {
    // if (this.container.classList.contains('popup_is-opened')) {
    //   this.buttonMenu.style.opacity = 0;
    // } else {
    //   this.buttonMenu.style.opacity = 1;
    // }
    const popup = event.target.closest('.popup');
    popup.classList.remove('popup_is-opened');
  }

  deleteErrors() {
    const elementss = Array.from(this.form.elements);
    const elements = elementss.filter(function (elem) {
      return !(elem.id === 'submit');
    });
    elements.forEach((elem) => {
      const errors = elem.nextElementSibling;
      errors.style.height = '15px';
      errors.textContent = '';
    });
  }
}
