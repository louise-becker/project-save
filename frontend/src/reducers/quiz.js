import { createSlice } from '@reduxjs/toolkit';

const questions = [
  {
    id: 1,
    questionText: 'How much time do you spend cleaning/week?',
    options: ['4', '5', '7', '8', '9', '14'],

    // to differentiate each question the bg color changes
    // backgroundColor: '#',
    // imgUrl: `${img}`
  },
  {
    id: 2,
    questionText: 'How much time do you spend cooking/week?',
    options: ['4', '5', '7', '8', '9', '14'],
  },
  {
    id: 3,
    questionText: 'How much time do you spend scrolling your phone/week?',
    options: ['4', '5', '7', '8', '9', '14'],
  },
  {
    id: 4,
    questionText: 'How much time do you live/week?',
    options: ['4', '5', '7', '8', '9', '14'],
  },
];

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  // quizStart: false,
};

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    /**
     * Use this action when a user selects an answer to the question.
     * The answer will be stored in the `quiz.answers` state with the
     * following values:
     *
     *    questionId  - The id of the question being answered.
     *    answerIndex - The index of the selected answer from the question's options.
     *    question    - A copy of the entire question object, to make it easier to show
     *                  details about the question in your UI.
     *    answer      - The answer string.
     *
     * When dispatching this action, you should pass an object as the payload with `questionId`
     * and `answerIndex` keys. See the readme for more details.
     */
    submitAnswer: (state, action) => {
      console.log('State: ', state);
      console.log('Action: ', action);

      const { questionId, answerIndex } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);

      if (!question) {
        throw new Error(
          'Could not find question! Check to make sure you are passing the question id correctly.'
        );
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(
          `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
        );
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
      });
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true;
      } else if (state.currentQuestionIndex === state.questions.length - 2) {
        state.lastQuestion = true;
      } else {
        state.currentQuestionIndex += 1;
      }
    },

    /**
     * Use this action to reset the state to the initial state the page had
     * when it was loaded. Who doesn't like re-doing a quiz when you know the
     * answers?!
     *
     * This action does not require a payload.
     */
    restart: () => {
      return initialState;
    },
    startTheQuiz: (state) => {
      state.quizStart = true;
    },
  },
});
