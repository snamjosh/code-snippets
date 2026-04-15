function($scope, $rootScope, $window) {
  var c = this;
  
  // Init: Read from localStorage
  c.isDarkMode = $window.localStorage.getItem('darkMode') === 'true';
  
  // Apply theme to DOM
  c.applyTheme = function() {
    if (c.isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };
  
  // Toggle function
  c.toggleDarkMode = function() {
    c.isDarkMode = !c.isDarkMode;
    $window.localStorage.setItem('darkMode', c.isDarkMode);
    c.applyTheme();
    $rootScope.$broadcast('darkModeToggled', { isDarkMode: c.isDarkMode });
  };
  
  // Apply on init (prevent flash)
  c.applyTheme();
}
