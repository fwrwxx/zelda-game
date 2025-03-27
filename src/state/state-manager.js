import globalStatemanager from './global-state.js';
import oldManGlobalStateManager from './oldman-global-state.js';
import playerGlobalStateManager from "./player-global-state.js";

export const gameState = globalStatemanager().getInstance();
export const oldmanState = oldManGlobalStateManager().getInstance();
export const playerState = playerGlobalStateManager().getInstance();
