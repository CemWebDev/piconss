const fs = require('fs');
const path = require('path');

const getIcon = (name, theme = 'default') => {
  let iconPath;
  if (theme === 'dark') {
    iconPath = path.join(__dirname, 'icons/dark', `${name}Dark.svg`);
  } else if (theme === 'light') {
    iconPath = path.join(__dirname, 'icons/light', `${name}Light.svg`);
  } else {
    iconPath = path.join(__dirname, 'icons/default', `${name}.svg`);
  }

  console.log(`Looking for icon at: ${iconPath}`);

  if (fs.existsSync(iconPath)) {
    return fs.readFileSync(iconPath, 'utf8');
  } else {
    return 'Icon not found';
  }
};

module.exports = getIcon;
