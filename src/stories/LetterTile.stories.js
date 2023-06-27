import LetterTile from '../components/LetterTile.vue'

export default {
  title: 'LetterTile',
  component: LetterTile,
  argTypes: {
    letter: {
      control: {
        type: 'text'
      }
    }
  }
}

export const Primary = {
  args: {
    letter: 'A'
  }
}
