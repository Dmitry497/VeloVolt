(function () {
  'use strict';

  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav--open');
      burger.setAttribute('aria-expanded', String(isOpen));
    });

    nav.addEventListener('click', (e) => {
      if (e.target.closest('.nav__link')) {
        nav.classList.remove('nav--open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const modal = document.getElementById('modal');

  const openModal = () => {
    if (!modal) return;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
  };

  document.addEventListener('click', (e) => {
    const openBtn = e.target.closest('[data-modal-open]');
    if (openBtn) {
      openModal();
    }
    if (e.target.closest('[data-modal-close]')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.hidden) {
      closeModal();
    }
  });
})();