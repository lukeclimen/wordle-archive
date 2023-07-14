import LetterGrid from "../components/LetterGrid.vue";

export default {
    title: 'LetterGrid',
    component: LetterGrid,
};

const Template = (args) => ({
    components: { LetterGrid },
    setup() {
        return { args };
    },
    template: '<LetterGrid v-bind="args"/>',
});

export const Primary = Template.bind({});
Primary.args = {  };