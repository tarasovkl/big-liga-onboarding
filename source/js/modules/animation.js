const animate = () => {
  const body = document.querySelector('body');
  const mainPage = document.querySelector('.page');
  const loadLogo = document.querySelector('.load__logo');
  const headerLogo = document.querySelector('.header__logo');
  const LOADINGTIME = 1500;

  loadLogo.classList.add('load__logo--loading');

  const openPage = () => {
    mainPage.classList.add('load-close');
    body.classList.add('open-page');
  };

  const onEnterPress = (evt) => {
    if (evt.key === 'Enter') {
      openPage();
    }
  };

  setTimeout(() => {
    body.addEventListener('click', openPage);
    window.addEventListener('keydown', onEnterPress);
  }, LOADINGTIME);

  body.onclick = function (evt) {
    if (mainPage.classList.contains('load-close') && evt.target !== headerLogo) {
      mainPage.classList.toggle('open-description');
    }
  };
};

export {animate};
