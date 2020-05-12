import {
    createTheme,
    embedStart,
    embedStartButton,
    embedContinue
} from './dist/traversal-react-redux.cjs.production.min.js';

module.exports = {
    createTheme,
    start: embedStart,
    startButton: embedStartButton,
    continue: embedContinue
}