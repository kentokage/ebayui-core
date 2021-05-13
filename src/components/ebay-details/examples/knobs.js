const { text, select, boolean } = require('@storybook/addon-knobs');

module.exports = () => ({
    text: text('text', 'details', 'Options'),
    type: select('type', ['regular', 'center'], 'regular', 'Options'),
    size: select('size', ['regular', 'small'], 'regular', 'Options'),
    open: boolean('open', false, 'Options'),
    as: text('as', 'p', 'Options'),
});
