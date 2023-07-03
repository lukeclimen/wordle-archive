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

export const GuessNotLockedIn = {
  args: {
    guess: 'trust'
  }
};
