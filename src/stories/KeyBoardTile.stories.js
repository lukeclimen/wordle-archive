import KeyBoardTile from '../components/KeyBoardTile.vue'

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

export const Blank = {
  args: {
    letterState: 'default',
    content: ''
  }
}

export const BackButton = {
  args: {
    letterState: 'default',
    content: 'back'
  }
}

export const EnterButton = {
  args: {
    letterState: 'default',
    content: 'enter'
  }
}

export const CorrectGuess = {
  args: {
    letterState: 'correct',
    content: 'a'
  }
}

export const WrongPosition = {
  args: {
    letterState: 'wrongPosition',
    content: 's'
  }
}

export const NotInWord = {
  args: {
    letterState: 'notInWord',
    content: 'd'
  }
}
