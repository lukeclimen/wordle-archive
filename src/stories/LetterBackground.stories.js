import LetterBackground from '../components/LetterBackground.vue'
import BaseLetter from '../components/BaseLetter.vue'

export default {
  title: 'LetterBackground',
  component: LetterBackground,
  argTypes: {
    letterState: {
      control: {
        type: 'select'
      },
      options: ['notLocked', 'correct', 'wrongPosition', 'notInWord']
    }
  }
}

const LockedInTemplate = {
  render: (args) => ({
    components: { LetterBackground, BaseLetter },
    setup() {
      return { args }
    },
    template: `
    <div class="w-15 h-15">
      <LetterBackground v-bind="args">
        <BaseLetter class="text-4xl" colour="white" letter="w" />
      </LetterBackground>
    </div>
    `
  })
}

const NotLockedTemplate = {
  render: (args) => ({
    components: { LetterBackground, BaseLetter },
    setup() {
      return { args }
    },
    template: `
    <div class="w-15 h-15">
      <LetterBackground v-bind="args">
        <BaseLetter class="text-4xl" colour="black" letter="b" />
      </LetterBackground>
    </div>
    `
  })
}

export const NotLocked = {
  ...NotLockedTemplate,
  args: {
    letterState: 'notLocked'
  }
}

export const Correct = {
  ...LockedInTemplate,
  args: {
    letterState: 'correct'
  }
}

export const WrongPosition = {
  ...LockedInTemplate,
  args: {
    letterState: 'wrongPosition'
  }
}

export const NotInWord = {
  ...LockedInTemplate,
  args: {
    letterState: 'notInWord'
  }
}
