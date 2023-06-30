import LetterTile from '../components/LetterTile.vue'

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
    guess: {
      control: {
        type: 'select'
      },
      options: ['correct', 'wrongPosition', 'notInWord']
    }
  }
}

export const EmptyNotLockedIn = {
  args: {}
}

export const LetterNotLockedIn = {
  args: {
    hasLetter: true
  }
}

export const CorrectGuess = {
  args: {
    hasLetter: true,
    guess: 'correct'
  }
}

export const GuessWrongPosition = {
  args: {
    hasLetter: true,
    guess: 'wrongPosition'
  }
}

export const WrongGuess = {
  args: {
    hasLetter: true,
    guess: 'notInWord'
  }
}
