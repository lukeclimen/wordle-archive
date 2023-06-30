import LetterTile from '../components/LetterTile.vue'
import LetterBackground from '../components/LetterBackground.vue'
import BaseLetter from '../components/BaseLetter.vue'

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

const Template = {
  render: (args) => ({
    components: { LetterTile, LetterBackground, BaseLetter },
    setup() {
      return { args }
    },
    template: `
    <LetterTile v-bind="args">
      <LetterBackground v-bind="args">
        <BaseLetter class="text-4xl" colour="white" letter="w" />
      </LetterBackground>
    </LetterTile>
    `
  })
}

export const EmptyNotLockedIn = {
  ...Template,
  args: {
    letterState: 'notLocked'
  }
}

export const LetterNotLockedIn = {
  ...Template,
  args: {
    hasLetter: true,
    letterState: 'notLocked'
  }
}

export const CorrectGuess = {
  ...Template,
  args: {
    hasLetter: true,
    guess: 'correct',
    letterState: 'correct'
  }
}

export const GuessWrongPosition = {
  ...Template,
  args: {
    hasLetter: true,
    guess: 'wrongPosition',
    letterState: 'wrongPosition'
  }
}

export const WrongGuess = {
  ...Template,
  args: {
    hasLetter: true,
    guess: 'notInWord',
    letterState: 'notInWord'
  }
}
