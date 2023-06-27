import LetterTile from '../components/LetterTile.vue'

export default {
  title: 'LetterTile',
  component: LetterTile,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    letter: {
      control: {
        type: 'text'
      }
    }
  }
}

export const EmptyNotLocked = {
  args: {}
}

export const LetterNotLocked = {
  args: {
    letter: 'A'
  }
}
