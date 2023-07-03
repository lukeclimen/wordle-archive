import BaseLetter from '../components/BaseLetter.vue';

export default {
  title: 'BaseLetter',
  component: BaseLetter,
  argTypes: {
    letter: {
      control: 'text'
    },
    colour: {
      control: {
        type: 'select'
      },
      options: ['white', 'black']
    }
  },
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [
        {
          name: 'gray',
          value: '#787c7e'
        }
      ]
    }
  }
};

export const WhiteLetter = {
  args: {
    letter: 'w',
    colour: 'white'
  }
};

export const BlackLetter = {
  args: {
    letter: 'b',
    colour: 'black'
  }
};
