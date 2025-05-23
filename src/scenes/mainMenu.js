import menuText from '../content/menuText.js';
import { gameState } from '../state/stateManagers.js';
import { colorizeBackground } from '../utils.js';

export default function mainMenu(k) {
  const currentLocale = gameState.getLocale();

  colorizeBackground(k, 0, 0, 0);

  k.add([
    k.text(menuText[currentLocale].title, { size: 32, font: 'pressstart' }),
    k.area(),
    k.anchor('center'),
    k.pos(k.center().x, k.center().y - 100),
  ]);

  k.add([
    k.text(menuText[currentLocale].languageIndication, {
      size: 17,
      font: 'pressstart',
    }),
    k.area(),
    k.anchor('center'),
    k.pos(k.center().x, k.center().y + 100),
  ]);

  k.add([
    k.text(menuText[currentLocale].playIndication, {
      size: 24,
      font: 'pressstart',
    }),
    k.area(),
    k.anchor('center'),
    k.pos(k.center().x, k.center().y + 200),
  ]);

  k.onKeyPress('f', () => {
    if (currentLocale !== 'ukrainian') gameState.setLocale('ukrainian');
    if (currentLocale !== 'english') gameState.setLocale('english');
    k.go('mainMenu');
  });

  k.onKeyPress('enter', () => {
    if (gameState.getLocale() === 'ukrainian') gameState.setFontSize(28);
    k.go('world');
  });
}
