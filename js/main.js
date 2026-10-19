(function () {
  'use strict';

  /* ===== BURGER ===== */
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

  /* ===== MODAL ===== */
  const modal = document.getElementById('modal');
  const formProduct = document.getElementById('form-product');
  const formStatus = document.getElementById('form-status');
  const leadForm = document.getElementById('lead-form');

  const openModal = (productName = '') => {
    if (!modal) return;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    if (formProduct) formProduct.value = productName;
    formStatus.textContent = '';
    formStatus.className = 'form__status';
  };

  const closeModal = () => {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
  };

  document.addEventListener('click', (e) => {
    const openBtn = e.target.closest('[data-modal-open]');
    if (openBtn) {
      const product = openBtn.dataset.product || '';
      openModal(product);
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

  /* ===== FORM SUBMIT → Telegram ===== */
  // Замени на свои значения
  const TG_TOKEN = 'YOUR_BOT_TOKEN';
  const TG_CHAT_ID = 'YOUR_CHAT_ID';

  if (leadForm) {
    leadForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(leadForm);
      const name = (formData.get('name') || '').toString().trim();
      const phone = (formData.get('phone') || '').toString().trim();
      const product = (formData.get('product') || '').toString().trim();

      if (!name || !phone) {
        formStatus.textContent = 'Заполни имя и телефон';
        formStatus.className = 'form__status form__status--error';
        return;
      }

      const submitBtn = leadForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      formStatus.textContent = 'Отправляем...';
      formStatus.className = 'form__status';

      const text = [
        '🛒 Новая заявка с сайта',
        `👤 Имя: ${name}`,
        `📞 Телефон: ${phone}`,
        product ? `🚲 Товар: ${product}` : '',
      ]
        .filter(Boolean)
        .join('\n');

      try {
        const res = await fetch(
          `https://api.telegram.org/bot${TG_TOKEN}/sendMessage`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: TG_CHAT_ID, text }),
          }
        );

        if (!res.ok) throw new Error('Telegram error');

        formStatus.textContent = 'Готово! Перезвоним в течение 15 минут.';
        formStatus.className = 'form__status form__status--ok';
        leadForm.reset();

        setTimeout(closeModal, 2000);
      } catch (err) {
        formStatus.textContent = 'Ошибка отправки. Позвони нам напрямую.';
        formStatus.className = 'form__status form__status--error';
      } finally {
        submitBtn.disabled = false;
      }
    });
  }
})();