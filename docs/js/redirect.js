if (window.location.hostname === 'atuaria.github.io') {
  window.location = 'https://atuaria.org' + location.pathname.replace(/^\/atuaria/, '');
}