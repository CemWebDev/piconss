const fs = require('fs');
const path = require('path');

describe('piconss SVG format validation', () => {
  const themes = ['dark', 'light', 'default'];
  const iconDir = path.join(__dirname, '../icons');

  const isSvgFormat = (fileContent) => {
    return fileContent.startsWith('<svg') && fileContent.endsWith('</svg>');
  };

  themes.forEach((theme) => {
    const themeDir = path.join(iconDir, theme);
    test(`should validate all SVG icons in ${theme} theme`, () => {
      const icons = fs
        .readdirSync(themeDir)
        .filter((file) => file.endsWith('.svg'));
      icons.forEach((icon) => {
        console.log(`Checking icon: ${icon}`);
        const iconPath = path.join(themeDir, icon);
        const content = fs.readFileSync(iconPath, 'utf-8');
        expect(isSvgFormat(content)).toBe(true);
      });
    });
  });
});
