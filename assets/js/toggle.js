  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  
  function switchTheme(e) {
      if (e.target.checked) {
          document.documentElement.setAttribute('data-theme', 'dark');
      }
      else {
          document.documentElement.setAttribute('data-theme', 'light');
      }    
  }
  
  toggleSwitch.addEventListener('change', switchTheme, false);

  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
  
  if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
  
      if (currentTheme === 'dark') {
          toggleSwitch.checked = true;
      }
  }
