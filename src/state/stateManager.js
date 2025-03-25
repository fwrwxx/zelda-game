import globalStatemanager from './globalState.js';
import oldManGlobalStateManager from './oldmanGlobalState.js';

export const gameState = globalStatemanager().getInstance();
export const oldmanState = oldManGlobalStateManager().getInstance();
