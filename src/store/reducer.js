import { ADD_NEW_WORD, CHANGE_AMOUNT, CHANGE_SCORE } from './actionsTypes';

const initialState = {
  dictionary: [
    {
      questionText: 'capable',
      questionTranslate: 'здатний',
      answers: [
        {
          answerText: 'здатний',
          correctAnswer: true
        },
        {
          answerText: 'брехня',
          correctAnswer: false
        },
        {
          answerText: 'безмежний',
          correctAnswer: false
        },
        {
          answerText: 'уникати',
          correctAnswer: false
        }
      ]
    },
    {
      questionText: 'priority',
      questionTranslate: 'пріорітет',
      answers: [
        {
          answerText: 'безмежний',
          correctAnswer: false
        },
        {
          answerText: 'здобувати',
          correctAnswer: false
        },
        {
          answerText: 'покращувати',
          correctAnswer: false
        },
        {
          answerText: 'пріорітет',
          correctAnswer: true
        }
      ]
    },
    {
      questionText: 'infinite',
      questionTranslate: 'безмежний',
      answers: [
        {
          answerText: 'вогонь',
          correctAnswer: false
        },
        {
          answerText: 'безмежний',
          correctAnswer: true
        },
        {
          answerText: 'наголошувати',
          correctAnswer: false
        },
        {
          answerText: 'здатний',
          correctAnswer: false
        }
      ]
    },
    {
      questionText: 'fire',
      questionTranslate: 'вогонь',
      answers: [
        {
          answerText: 'уникати',
          correctAnswer: false
        },
        {
          answerText: 'здобувати',
          correctAnswer: false
        },
        {
          answerText: 'вогонь',
          correctAnswer: true
        },
        {
          answerText: 'пріорітет',
          correctAnswer: false
        }
      ]
    },
    {
      questionText: 'cap',
      questionTranslate: 'брехня',

      answers: [
        {
          answerText: 'брехня',
          correctAnswer: true
        },
        {
          answerText: 'покращувати',
          correctAnswer: false
        },
        {
          answerText: 'здатний',
          correctAnswer: false
        },
        {
          answerText: 'вогонь',
          correctAnswer: false
        }
      ]
    },
    {
      questionText: 'highlight',
      questionTranslate: 'наголошувати',

      answers: [
        {
          answerText: 'уникати',
          correctAnswer: false
        },
        {
          answerText: 'здобувати',
          correctAnswer: false
        },
        {
          answerText: 'наголошувати',
          correctAnswer: true
        },
        {
          answerText: 'брехня',
          correctAnswer: false
        }
      ]
    },
    {
      questionText: 'enhance',
      questionTranslate: 'покращувати',

      answers: [
        {
          answerText: 'покращувати',
          correctAnswer: true
        },
        {
          answerText: 'здобувати',
          correctAnswer: false
        },
        {
          answerText: 'брехня',
          correctAnswer: false
        },
        {
          answerText: 'наголошувати',
          correctAnswer: false
        }
      ]
    },
    {
      questionText: 'elude',
      questionTranslate: 'уникати',

      answers: [
        {
          answerText: 'пріорітет',
          correctAnswer: false
        },
        {
          answerText: 'уникати',
          correctAnswer: true
        },
        {
          answerText: 'здатний',
          correctAnswer: false
        },
        {
          answerText: 'вогонь',
          correctAnswer: false
        }
      ]
    },
    {
      questionText: 'acquire',
      questionTranslate: 'здобувати',

      answers: [
        {
          answerText: 'здобувати',
          correctAnswer: true
        },
        {
          answerText: 'брехня',
          correctAnswer: false
        },
        {
          answerText: 'безмежний',
          correctAnswer: false
        },
        {
          answerText: 'пріорітет',
          correctAnswer: false
        }
      ]
    },
    {
      questionText: 'deviate',
      questionTranslate: 'відхилятися',

      answers: [
        {
          answerText: 'здобувати',
          correctAnswer: false
        },
        {
          answerText: 'відхилятися',
          correctAnswer: true
        },
        {
          answerText: 'уникати',
          correctAnswer: false
        },
        {
          answerText: 'безмежний',
          correctAnswer: false
        }
      ]
    }
  ],
  questionIndex: 0,
  topscore: 0,
  amount: 10,
  score: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_WORD:
      return {
        ...state,
        dictionary: state.dictionary.concat(action.payload)
      };
    case CHANGE_AMOUNT:
      return {
        ...state,
        amount: state.amount + action.payload
      };
    case CHANGE_SCORE:
      return {
        ...state,
        score: state.score + action.payload
      };
    default:
      return state;
  }
};
