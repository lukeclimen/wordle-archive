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

export const EmptyNotLockedIn = {
  args: {}
}

export const LetterNotLockedIn = {
  args: {
    letter: 'A'
  }
}

export const CorrectGuess = {
  args: {
    letter: 'G',
    guess: 'correct'
  }
}

export const GuessWrongPosition = {
  args: {
    letter: 'U',
    guess: 'wrongPosition'
  }
}

export const WrongGuess = {
  args: {
    letter: 'X',
    guess: 'notInWord'
  }
}
