import { animate } from './helpers';

const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const popupContent = modal.querySelector('.popup-content');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      popupContent.style.top = 0;
      modal.style.display = 'block';
      
      animate({
        duration: 350,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
            popupContent.style.top = (25 * progress) + "%";
        },
      });
    });
  });

  modal.addEventListener('click', (e) => {
    if (
      !e.target.closest('.popup-content') ||
      e.target.classList.contains('popup-close')
    ) {
      modal.style.display = 'none';
    }
  });
};

export default modal;
