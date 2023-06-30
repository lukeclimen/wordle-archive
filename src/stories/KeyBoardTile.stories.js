import KeyBoardTile from '../components/KeyBoardTile.vue'
import LetterBackground from '../components/LetterBackground.vue'
import BaseLetter from '../components/BaseLetter.vue'

export default {
  title: 'KeyBoardTile',
  component: KeyBoardTile,
  argTypes: {
    content: {
      control: 'text'
    },
    letterState: {
      control: 'radio',
      options: ['default', 'correct', 'wrongPosition', 'notInWord']
    }
  }
}

const Template = {
  render: (args) => ({
    components: { KeyBoardTile, LetterBackground, BaseLetter },
    setup() {
      return { args }
    },
    template: `
    <KeyBoardTile v-bind="args">
      <LetterBackground v-bind="args">
        <BaseLetter v-bind="args"/>
      </LetterBackground>
    </KeyBoardTile>
    `
  })
}

export const Blank = {
  ...Template,
  args: {
    letterState: 'default',
    content: ''
  }
}

export const BackButton = {
  ...Template,
  args: {
    letterState: 'default',
    content: 'back'
  }
}

export const EnterButton = {
  ...Template,
  args: {
    letterState: 'default',
    content: 'enter'
  }
}

export const CorrectGuess = {
  ...Template,
  args: {
    letterState: 'correct',
    content: 'a'
  }
}

export const WrongPosition = {
  ...Template,
  args: {
    letterState: 'wrongPosition',
    content: 's'
  }
}

export const NotInWord = {
  ...Template,
  args: {
    letterState: 'notInWord',
    content: 'd'
  }
}
