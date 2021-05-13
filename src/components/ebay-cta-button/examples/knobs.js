const { text, select } = require('@storybook/addon-knobs');

module.exports = () => ({
    text: text('text', 'cta text', 'Options'),
    href: text('href', 'https://www.ebay.com', 'Options'),
    size: select('size', [null, 'large'], null, 'Options'),
});
