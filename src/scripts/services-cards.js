// This script handles the tab functionality for the services cards section.
document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  function activateTab(targetId) {
    tabButtons.forEach(button => {
      button.classList.remove('bg-white', 'shadow-md');
      button.classList.add('hover:bg-gray-200');
      button.setAttribute('aria-selected', 'false');

      const icon = button.querySelector('svg');
      const title = button.querySelector('.grow .block:first-child');
      const description = button.querySelector('.grow .block:last-child');

      if (icon) {
        icon.classList.remove('text-blue-600', 'dark:text-blue-500');
        icon.classList.add('text-gray-800', 'dark:text-neutral-200');
      }
      if (title) {
        title.classList.remove('text-blue-600', 'dark:text-blue-500');
        title.classList.add('text-gray-800', 'dark:text-neutral-200');
      }
      if (description) {
        description.classList.remove('dark:text-gray-200');
        description.classList.add('dark:text-neutral-200');
      }
    });

    tabContents.forEach(content => content.classList.add('hidden'));

    const activeButton = document.querySelector('[data-tab="' + targetId + '"]');
    const activeContent = document.getElementById(targetId);

    if (activeButton) {
      activeButton.classList.add('bg-white', 'shadow-md');
      activeButton.classList.remove('hover:bg-gray-200');
      activeButton.setAttribute('aria-selected', 'true');

      const icon = activeButton.querySelector('svg');
      const title = activeButton.querySelector('.grow .block:first-child');
      const description = activeButton.querySelector('.grow .block:last-child');

      if (icon) {
        icon.classList.add('text-blue-600', 'dark:text-blue-500');
        icon.classList.remove('text-gray-800', 'dark:text-neutral-200');
      }
      if (title) {
        title.classList.add('text-blue-600', 'dark:text-blue-500');
        title.classList.remove('text-gray-800', 'dark:text-neutral-200');
      }
      if (description) {
        description.classList.add('dark:text-gray-200');
        description.classList.remove('dark:text-neutral-200');
      }
    }

    if (activeContent) {
      activeContent.classList.remove('hidden');
    }
  }

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-tab');
      activateTab(targetId);
    });
    button.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const targetId = button.getAttribute('data-tab');
        activateTab(targetId);
      }
    });
  });

  activateTab('tabs-with-card-1');
});
