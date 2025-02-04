//get element by id theme-switcher and get value
const themeSwitcher = document.getElementById('theme-switcher');
      themeSwitcher.addEventListener('change', function() {
        if (this.checked) {
          document.body.setAttribute('data-theme', 'dark');
        } else {
          document.body.setAttribute('data-theme', 'light');
        }
});


