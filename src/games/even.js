import { getRandomNumber } from '../utils.js';
import runGameLogic, { numOfRounds } from '../gameLogic.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEvenGame = () => {
  const rounds = [];
  for (let i = 0; i < numOfRounds; i += 1) {
    rounds[i] = generateRound();
  }
  return runGameLogic(rounds, description);
};

export default runEvenGame;
