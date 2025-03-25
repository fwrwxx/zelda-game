export default function globalStatemanager() {
  let instance = null;

  function createInstance() {
    let freezePlayer = false;
    let local = 'english';
    let fontSize = 28;

    return {
      setFreezePlayer(value) {
        freezePlayer = value;
      },
      getFreezePlayer() {
        return freezePlayer;
      },
      setFontSixe(value) {
        fontSize = value;
      },
      getFontSize() {
        return fontSize;
      },
      setlocal(value) {
        local = value;
      }
      getLocal() {
        return local;
      }
    };
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    },
  };
}
