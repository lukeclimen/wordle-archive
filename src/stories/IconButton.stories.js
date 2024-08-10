import IconButton from '../components/IconButton.vue';
import { Cog6ToothIcon } from '@heroicons/vue/24/solid';
import { CalendarDaysIcon } from '@heroicons/vue/24/outline';

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

export const SettingsButton = Template.bind({});
SettingsButton.args = {
  icon: Cog6ToothIcon
};

export const CalendarButton = Template.bind({});
CalendarButton.args = {
  icon: CalendarDaysIcon
};
