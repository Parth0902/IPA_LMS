export const loadPlayerScript = () => {
  return new Promise((resolve, reject) => {
    if (document.getElementById('playerjs-script')) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.id = 'playerjs-script';
    script.src = '//assets.mediadelivery.net/playerjs/player-0.1.0.min.js';
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};