import CalendarModal from '../components/modals/CalendarModal.vue';

export default {
  title: 'Components/CalendarModal',
  component: CalendarModal
};

const Template = (args) => ({
  components: { CalendarModal },
  setup() {
    return { args };
  },
  template: '<CalendarModal v-bind="args"/>'
});

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};
