import GridRow from '../components/GridRow.vue';

export default {
  title: 'GridRow',
  component: GridRow,
  argTypes: {
    guess: {
      control: 'disabled'
    }
  }
};

export const Empty = {
  args: {}
};

export const GuessNotFilled = {
  args: {
    guess: 'tru'
  }
};

export const GuessNotLockedIn = {
  args: {
    guess: 'trust'
  }
};

export const GuessLockedIn = {
  args: {
    guess: 'trust',
    locked: true,
    correctLetters: [1, 4],
    wrongPositionLetters: [3]
  }
};
