import globalStatemanager from './globalState.js';
import oldManGlobalStateManager from './oldmanGlobalState.js';
import playerGlobalStateManager from "./playerGlobalState.js";

export const gameState = globalStatemanager().getInstance();
export const oldmanState = oldManGlobalStateManager().getInstance();
export const playerState = playerGlobalStateManager().getInstance();
