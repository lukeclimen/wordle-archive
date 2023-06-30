import KeyBoardTile from '../components/KeyBoardTile.vue'
import LetterBackground from '../components/LetterBackground.vue'
import BaseLetter from '../components/BaseLetter.vue'

export default {
  title: 'KeyBoardTile',
  component: KeyBoardTile,
  argTypes: {}
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
        <BaseLetter class="text-4xl" v-bind="args"/>
      </LetterBackground>
    </KeyBoardTile>
    `
  })
}

export const Primary = {
  ...Template,
  args: {
    letterState: 'default',
    colour: 'black',
    letter: 'b'
  }
}
