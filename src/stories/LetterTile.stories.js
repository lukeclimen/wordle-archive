import LetterTile from '../components/LetterTile.vue';

export default {
  title: 'LetterTile',
  component: LetterTile,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    hasLetter: {
      control: {
        type: 'text'
      }
    },
    letterState: {
      control: {
        type: 'select'
      },
      options: ['correct', 'wrongPosition', 'notInWord']
    }
  }
};

export const EmptyNotLockedIn = {
  args: {}
};

export const LetterNotLockedIn = {
  args: {
    colour: 'black',
    content: 'b'
  }
};

export const CorrectGuess = {
  args: {
    hasLetter: true,
    guess: 'correct',
    letterState: 'correct',
    colour: 'white',
    content: 'c'
  }
};

export const GuessWrongPosition = {
  args: {
    hasLetter: true,
    letterState: 'wrongPosition',
    content: 'w'
  }
};

export const WrongGuess = {
  args: {
    hasLetter: true,
    letterState: 'notInWord',
    content: 'n'
  }
};
