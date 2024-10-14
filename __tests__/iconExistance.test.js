const fs = require('fs');
const path = require('path');

describe('piconss icons existing tests', () => {
  const themes = ['dark', 'light', 'default'];
  const iconDir = path.join(__dirname, '../icons');

  const checkIcons = (dir) => {
    const files = fs.readdirSync(dir);
    return files.filter((file) => file.endsWith('.svg'));
  };

  themes.forEach((theme) => {
    const themeDir = path.join(iconDir, theme);

    test(`should check all icons in ${theme} theme.`, () => {
      const icons = checkIcons(themeDir);
      icons.forEach((icon) => {
        const iconPath = path.join(themeDir, icon);
        expect(fs.existsSync(iconPath)).toBe(true);
      });
    });
  });
});
