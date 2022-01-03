var i = 0;
setInterval(() => {
  var titles = ['Semoizm', 'Discord ── Semoizm#0001', 'GitHub ── @semoizm', 'Instagram ── @semoizm', 'Steam ── /semoizm', 'Spotify ── semoizm'];
  if(i == titles.length) i = 0;
  document.title = titles[i];
  i++;
}, 3000);