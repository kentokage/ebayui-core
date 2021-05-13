const { text } = require('@storybook/addon-knobs');

module.exports = () => ({
    rating: text('rating', 'A', 'Options'),
    max: text('max', 'A++', 'Options'),
    min: text('min', 'G', 'Options'),
});
