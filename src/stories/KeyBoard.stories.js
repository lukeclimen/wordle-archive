import KeyBoard from '../components/KeyBoard.vue';

export default {
  title: 'KeyBoard',
  component: KeyBoard,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    correctLetters: {
      control: 'disabled'
    },
    wrongPositionLetters: {
      control: 'disabled'
    },
    wrongGuessLetters: {
      control: 'disabled'
    }
  }
};

export const Default = {
  args: {}
};

export const SomeGuesses = {
  args: {
    correctLetters: ['a', 'y'],
    wrongPositionLetters: ['t'],
    wrongGuessLetters: ['q', 'g', 'm']
  }
};

export const MostGuessed = {
  args: {
    correctLetters: ['a', 'y', 's'],
    wrongPositionLetters: ['t', 'r'],
    wrongGuessLetters: ['q', 'g', 'm', 'o', 'l', 'c', 'v', 'p']
  }
};
