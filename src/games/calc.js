import { getRandomNumber } from '../utils.js';
import runGameLogic, { numOfRounds } from '../gameLogic.js';

const description = 'What is the result of the expression?';

const getRandOperator = () => {
  const operators = ['+', '-', '*'];
  const randOperatorIndex = getRandomNumber(0, operators.length - 1);
  return operators[randOperatorIndex];
};

const calculate = (operator, operand1, operand2) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return Error('эээ брад нипон опер не пральна задал 👺');
  }
};

const generateRound = () => {
  const firstOperand = getRandomNumber(1, 100);
  const secondOperand = getRandomNumber(1, 100);
  const operator = getRandOperator();
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = String(calculate(operator, firstOperand, secondOperand));
  return [question, correctAnswer];
};

const runCalcGame = () => {
  const rounds = [];
  for (let i = 0; i < numOfRounds; i += 1) {
    rounds[i] = generateRound();
  }
  return runGameLogic(rounds, description);
};

export default runCalcGame;
