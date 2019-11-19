const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes, runTransformer } = require('../../../common/test-utils/server');
const transformer = require('../transformer');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));

describe('ebay-textbox', () => {
    it('renders default input textbox', async() => {
        const input = mock.Basic;
        const { getByRole } = await render(template, input);
        const textboxEl = getByRole('textbox');
        expect(textboxEl).has.value(input.value);
        expect(textboxEl).has.class('textbox__control');
        expect(textboxEl).has.property('tagName', 'INPUT');
        expect(textboxEl)
            .has.property('parentElement')
            .with.class('textbox');
    });

    it('renders default input textbox with an id', async() => {
        const input = mock.Basic_With_ID;
        const { getByRole } = await render(template, input);
        expect(getByRole('textbox')).contains.id(input.id);
    });

    it('renders fluid input textbox', async() => {
        const input = mock.Fluid;
        const { getByRole } = await render(template, input);
        expect(getByRole('textbox')).has.class('textbox__control--fluid');
    });

    it('renders a disabled input textbox', async() => {
        const input = mock.Disabled;
        const { getByRole } = await render(template, input);
        expect(getByRole('textbox')).has.property('disabled', true);
    });

    it('renders a input textbox with invalid/error state', async() => {
        const input = mock.Invalid;
        const { getByRole } = await render(template, input);
        expect(getByRole('textbox')).has.attr('aria-invalid', 'true');
    });

    it('renders a textarea element', async() => {
        const input = mock.Multiline;
        const { getByRole } = await render(template, input);
        const textboxEl = getByRole('textbox');
        expect(textboxEl).has.property('tagName', 'TEXTAREA');
        expect(textboxEl).has.text(input.value);
        expect(textboxEl).has.value(input.value);
    });

    it('renders a textarea element with prefix icon', async() => {
        const input = mock.Prefix_Icon;
        const { getByRole } = await render(template, input);
        expect(getByRole('textbox'))
            .has.property('previousElementSibling')
            .with.class('textbox__icon');
    });

    it('renders a textarea element with postfix icon', async() => {
        const input = mock.Postfix_Icon;
        const { getByRole } = await render(template, input);
        expect(getByRole('textbox'))
            .has.property('nextElementSibling')
            .with.class('textbox__icon');
    });

    it('renders an input textbox with inline floating label', async() => {
        const input = mock.Floating_Label;
        const { getByRole, getByLabelText, getByText } = await render(template, input);
        expect(getByRole('textbox')).to.equal(getByLabelText(input.floatingLabel));
        expect(getByText(input.floatingLabel)).has.class('floating-label__label');
    });

    it('renders an input textbox with inline floating label and an id', async() => {
        const input = mock.Floating_Label_With_ID;
        const { getByLabelText } = await render(template, input);
        expect(getByLabelText(input.floatingLabel)).has.id(input.id);
    });

    it('renders a disabled input textbox with disabled floating label', async() => {
        const input = mock.Floating_Label_Disabled;
        const { getByText } = await render(template, input);
        expect(getByText(input.floatingLabel)).has.class('floating-label__label--disabled');
    });

    testPassThroughAttributes(template, {
        getClassAndStyleEl(component) {
            return component.getByRole('textbox').parentElement;
        }
    });
});

describe('transformer', () => {
    const componentPath = '../index.marko';

    it('transforms an icon attribute into a tag', () => {
        const tagString = '<ebay-textbox icon="settings"/>';
        const { el } = runTransformer(transformer, tagString, componentPath);
        const { body: { array: [iconEl] } } = el;
        expect(iconEl.tagName).to.equal('ebay-textbox:icon');
    });

    it('does not transform when icon attribute is missing', () => {
        const tagString = '<ebay-textbox/>';
        const { el } = runTransformer(transformer, tagString, componentPath);
        const { body: { array: [iconEl] } } = el;
        expect(iconEl).to.equal(undefined);
    });
});
