export default function globalStatemanager() {
  let instance = null;

  function createInstance() {
    let previousScene = null;
    let freezePlayer = false;
    let local = 'english';
    let fontSize = 28;
    let isGhostDefeated = false;
    let isSonSaved = false;

    return {
      setPreviousScene(sceneName) {
        previousScene = sceneName;
      },
      getPreviousScene() {
        return previousScene;
      },
      setFreezePlayer(value) {
        freezePlayer = value;
      },
      getFreezePlayer() {
        return freezePlayer;
      },
      setFontSize(value) {
        fontSize = value;
      },
      getFontSize() {
        return fontSize;
      },
      setlocal(value) {
        local = value;
      },
      getLocal() {
        return local;
      },
      setIsGhostDefeated(value) {
        isGhostDefeated = value;
      },
      getIsGhostDefeated() {
        return isGhostDefeated;
      },
      setIsSonSaved(value) {
        isSonSaved = value;
      },
      getIsSonSaved() {
        return isSonSaved;
      },
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
