class MenuManager {
  constructor() {
    this.menuItems = document.querySelectorAll('.menu-item');
    this.notificationsPopup = document.querySelector('.notifications-popup');
    this.notificationsCount = document.querySelector('#notifications-notification-count');
    this.messages = document.querySelectorAll('.message');
    this.messageSearch = document.querySelector('#message-search');
    this.messagesContainer = document.querySelector('.messages');
  }



  toggleActiveItem(item) {
    this.menuItems.forEach(menuItem => {
      menuItem.classList.remove('active');
    });

    item.classList.add('active');
  }

  toggleNotificationsPopup() {
    this.notificationsPopup.style.display = this.notificationsPopup.style.display === 'none' ? 'block' : 'none';
    this.notificationsCount.style.display = 'none'; // Hide notification count when popup is shown
  }

  searchMessages(val) {
    this.messages.forEach(message => {
      const name = message.querySelector('h5').textContent.toLowerCase();

      if (name.indexOf(val) !== -1) {
        message.style.display = 'flex';
      } else {
        message.style.display = 'none';
      }
    });
  }

  highlightMessages() {
    this.messagesContainer.style.boxShadow = '0 0 1rem var(--color-primary)';
    this.notificationsCount.style.display = 'none';

    setTimeout(() => {
      this.messagesContainer.style.boxShadow = 'none';
    }, 2000);
  }
}

const menuManager = new MenuManager();

// Event delegation for menu items
menuManager.menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuManager.toggleActiveItem(item);

    if (item.id !== 'notifications') {
      menuManager.toggleNotificationsPopup();
    }
  });
});

// Event listener for search input
menuManager.messageSearch.addEventListener('keyup', () => {
  menuManager.searchMessages(menuManager.messageSearch.value.toLowerCase());
});

// Event listener for messages notification
menuManager.messagesNotification.addEventListener('click', () => {
  menuManager.highlightMessages();
});

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const openThemeModal = () => {
  themeModal.style.display = 'grid';
};

const closeThemeModal = (e) => {
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none';
  }
};

themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);


fontSizes.forEach(size => {
  let fontSize;

  size.addEventListener('click', () => {
      if (size.classList.contains('font-size-1')) {
          fontSize = '10px';
          root.style.setProperty('--sticky-top-left', '5.4rem');
          root.style.setProperty('--sticky-top-right', '5.4rem');
      } else if (size.classList.contains('font-size-2')) {
          fontSize = '13px';
          root.style.setProperty('--sticky-top-left', '5.4rem');
          root.style.setProperty('--sticky-top-right', '-7rem');
      } else if (size.classList.contains('font-size-3')) {
          fontSize = '16px';
          root.style.setProperty('--sticky-top-left', '-2rem');
          root.style.setProperty('--sticky-top-right', '-17rem');
      } else if (size.classList.contains('font-size-4')) {
          fontSize = '19px';
          root.style.setProperty('--sticky-top-left', '-5rem');
          root.style.setProperty('--sticky-top-right', '-25rem');
      } else if (size.classList.contains('font-size-5')) {
          fontSize = '22px';
          root.style.setProperty('--sticky-top-left', '-12rem');
          root.style.setProperty('--sticky-top-right', '-35rem');
      }

      // change font size of the root html element
      document.querySelector('html').style.fontSize = fontSize;
  });
});

