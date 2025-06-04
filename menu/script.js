const button = document.getElementById('menu-toggle');
const menu = document.getElementById('dropdown-menu');

button.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// --- custom icon cursor ---

const customCursor = document.createElement('div');
customCursor.classList.add('custom-cursor');
document.body.appendChild(customCursor);

const menuItems = document.querySelectorAll('.menu-item');

function setCursorIcon(iconClass) {
  customCursor.innerHTML = `<i class="${iconClass}"></i>`;
}

menuItems.forEach(item => {
  const icon = item.querySelector('.icon');
  if (!icon) return;

  item.addEventListener('mouseenter', (e) => {
    item.classList.add('hovered');

    const iconClass = icon.className; 
    
    const iconCursorClass = iconClass.replace(' icon', '');
    setCursorIcon(iconCursorClass);

    customCursor.style.display = 'block';
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('hovered');

    customCursor.style.display = 'none';
  });
});

window.addEventListener('mousemove', (e) => {
  customCursor.style.top = `${e.clientY}px`;
  customCursor.style.left = `${e.clientX}px`;
});
