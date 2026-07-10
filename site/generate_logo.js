const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgCode = `
<svg width="250" height="50" viewBox="0 0 250 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Icon Group -->
  <g transform="translate(0, 12)" stroke="#f26a21">
    <path d="M2 5H16" stroke-width="2.5" stroke-linecap="round" />
    <path d="M6 11H16" stroke-width="2.5" stroke-linecap="round" />
    <path d="M10 17H16" stroke-width="2.5" stroke-linecap="round" />
    <circle cx="26" cy="11" r="8" stroke-width="2" />
    <circle cx="26" cy="11" r="2" fill="#f26a21" stroke="none" />
    <path d="M26 3V5" stroke-width="1.5" />
    <path d="M26 17V19" stroke-width="1.5" />
    <path d="M18 11H20" stroke-width="1.5" />
    <path d="M32 11H34" stroke-width="1.5" />
    <path d="M20.3 5.3L21.7 6.7" stroke-width="1.5" />
    <path d="M30.3 15.3L31.7 16.7" stroke-width="1.5" />
    <path d="M20.3 16.7L21.7 15.3" stroke-width="1.5" />
    <path d="M30.3 6.7L31.7 5.3" stroke-width="1.5" />
  </g>
  <!-- Text Group -->
  <text x="50" y="27" font-family="Arial, sans-serif" font-size="20" font-weight="900" fill="#111827" letter-spacing="0.5">JETSMUNT</text>
  <text x="50" y="42" font-family="Arial, sans-serif" font-size="9" font-weight="800" fill="#6b7280" letter-spacing="1">DEFENSE PROPULSION SYSTEMS</text>
</svg>
`;

sharp(Buffer.from(svgCode))
  .png()
  .toFile(path.join(__dirname, 'public/media/logo-dark.png'))
  .then(() => console.log('Logo generated!'))
  .catch(err => console.error(err));
