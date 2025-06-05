export const detectOS = () => {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;
  
  const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  if (iosPlatforms.includes(platform)) return 'iOS';
  if (/Android/.test(userAgent)) return 'Android';
  if (/Mac/.test(platform)) return 'MacOS';
  if (/Win/.test(platform)) return 'Windows';
  if (/Linux/.test(platform)) return 'Linux';
  
  return 'Unknown';
};