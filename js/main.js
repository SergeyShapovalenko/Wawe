// masonry

const msnry = new Masonry('.grid', {
  itemSelector: '.grid-item',
  columnWidth: 1,
  gutter: 40
});

// menu

const headerTop = document.querySelector('.header__top');
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
  if (window.scrollY > header.offsetHeight - 140) {
    headerTop.style.backgroundColor = '#0D302C';
  } else {
    headerTop.style.backgroundColor = '';
  }
});

const menuLinks = document.querySelectorAll('.menu__list-link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onClick);
  });

  function onClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoSection = document.querySelector(menuLink.dataset.goto);
      const gotoSectionValue = gotoSection.getBoundingClientRect().top + window.scrollY - document.querySelector('.header__top').offsetHeight;


      window.scrollTo({
        top: gotoSectionValue,
        behavior: "smooth"
      });
    }
    e.preventDefault();
  }
}

const menuBtn = document.querySelector('.menu__btn');
if (menuBtn) {
  const menuList = document.querySelector('.menu__list');

  document.addEventListener('click', function (e) {
    if (e.target === menuBtn) {
      document.body.classList.toggle('_lock');
      menuBtn.classList.toggle('menu__btn--active');
      menuList.classList.toggle('menu__list--active');
    } else {
      document.body.classList.remove('_lock');
      menuBtn.classList.remove('menu__btn--active');
      menuList.classList.remove('menu__list--active');
    }
  });
}


// popup

const videoLink = document.querySelector('.gallery__video-link');
const content = document.querySelector('popup__content');
const videoIframe = document.querySelector('.popup__iframe')


videoLink.addEventListener('click', function (e) {
  e.preventDefault();
  popup.classList.add('popup-active');
  videoIframe.src = 'https://www.youtube.com/embed/ma67yOdMQfs?si=gGvj4uQe6TPcXQo6';
});

popup.addEventListener('click', function (e) {
  if (e.target != content) {
    popup.classList.remove('popup-active');
    videoIframe.src = '';
  }
});

// filter

const list = document.querySelector('.gallery__list');
const items = document.querySelectorAll('.gallery__item'); 
const listItems = document.querySelectorAll('.gallery__list-item'); 

function filter() {
  list.addEventListener('click', e => {
    const targetId = e.target.dataset.id;
    const target = e.target;
  
    if(target.classList.contains('gallery__list-item')) {
      listItems.forEach(listItem => listItem.classList.remove('active'))
    target.classList.add('active')
    }

    switch(targetId) {
      case 'all':
        getItems('gallery__item')
        break
      case 'tourists':
        getItems(targetId)
        break
      case 'nature':
        getItems(targetId)
        break
      case 'pros':
        getItems(targetId)
        break
    }
  });
}

filter(); 


function  getItems(className) {
  msnry.destroy();

  items.forEach(item => {
    if (item.classList.contains(className)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })

  msnry = new Masonry('.grid', {
    itemSelector: '.grid-item',
    columnWidth: 1,
    gutter: 40
  });
}

// swiper

const swiper = new Swiper('.swiper', {
  
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});