import IconButton from '../components/IconButton.vue';

export default {
  title: 'Components/IconButton',
  component: IconButton
};

const Template = (args) => ({
  components: { IconButton },
  setup() {
    return { args };
  },
  template: `
    <div class="flex flex-row justify-center align-middle h-20 w-full">
        <IconButton v-bind="args"/>
    </div>`
});

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};
