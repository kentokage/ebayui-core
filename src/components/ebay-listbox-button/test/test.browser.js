const { expect, use } = require('chai');
const { render, fireEvent, cleanup } = require('@marko/testing-library');
const { pressKey } = require('../../../common/test-utils/browser');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

// Tests are rendered in a form so that we can check the form data value.
const form = document.createElement('form');
before(() => document.body.appendChild(form));
after(() => document.body.removeChild(form));

describe('given the listbox with 3 items', () => {
    const input = mock.Basic_3Options;

    beforeEach(async () => {
        component = await render(template, Object.assign({}, input, { listSelection: 'auto' }), {
            container: form,
        });
    });

    it('then it should not be expanded', () => {
        expect(component.getByRole('button')).has.attr('aria-expanded', 'false');
    });

    it('then it should have button with name attribute', () => {
        expect(component.getByRole('button')).has.attr('name', 'listbox-button-name');
    });

    it('then the native select should be initialized to the first option value', () => {
        expect(form.elements)
            .has.property(input.name)
            .with.property('value', input.options[0].value);
    });

    describe('when the down arrow key is pressed', () => {
        beforeEach(async () => {
            await pressKey(component.getByRole('button'), {
                key: 'ArrowDown',
                keyCode: 40,
            });
        });

        it('then it should not expand the listbox', () => {
            expect(component.getByRole('button')).has.attr('aria-expanded', 'false');
        });

        describe('when the up arrow key is pressed', () => {
            beforeEach(async () => {
                component.emitted('change');
                await pressKey(component.getByRole('button'), {
                    key: 'ArrowUp',
                    keyCode: 38,
                });
            });

            it('then it should not expand the listbox', () => {
                expect(component.getByRole('button')).has.attr('aria-expanded', 'false');
            });
        });
    });

    describe('when the button is clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByRole('button'));
        });

        it('then it emits the event from expander-expand', () => {
            expect(component.emitted('expand')).has.length(1);
        });

        it('then it has expanded the listbox', () => {
            expect(component.getByRole('button')).has.attr('aria-expanded', 'true');
        });

        describe('when the button is clicked again', () => {
            beforeEach(async () => {
                await fireEvent.click(component.getByRole('button'));
            });

            it('then it emits the event from expander-collapse', () => {
                expect(component.emitted('collapse')).has.length(1);
            });

            it('then it has collapsed the listbox', () => {
                expect(component.getByRole('button')).has.attr('aria-expanded', 'false');
            });
        });
    });
});

describe('given the listbox is in an expanded state', () => {
    const input = mock.Basic_3Options_FirstSelected;

    beforeEach(async () => {
        component = await render(template, Object.assign({}, input, { listSelection: 'auto' }), {
            container: form,
        });
        await fireEvent.click(component.getByRole('button'));
    });

    describe('when an option is clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByText(input.options[1].text));
        });

        it('Should trigger listbox change change', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).has.length(1);

            const [[changeEvent]] = changeEvents;
            expect(changeEvent).has.property('index', 1);
            expect(changeEvent)
                .has.property('selected')
                .and.is.deep.equal([input.options[1].value]);
        });
    });

    describe('when the down arrow key is pressed', () => {
        beforeEach(async () => {
            await pressKey(component.getAllByRole('listbox').find(isVisible), {
                key: 'ArrowDown',
                keyCode: 40,
            });
        });

        it('then it emits the change event with the correct data', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).has.length(1);

            const [[changeEvent]] = changeEvents;
            expect(changeEvent).has.property('index', 1);
            expect(changeEvent)
                .has.property('selected')
                .and.is.deep.equal([input.options[1].value]);
        });
    });
});

describe('given the listbox is in an expanded state with manual list-selection', () => {
    const input = mock.Basic_3Options_FirstSelected;

    beforeEach(async () => {
        component = await render(template, input, { container: form });
        await fireEvent.click(component.getByRole('button'));
    });

    describe('when the down arrow key is pressed', () => {
        beforeEach(async () => {
            await pressKey(component.getAllByRole('listbox').find(isVisible), {
                key: 'ArrowDown',
                keyCode: 40,
            });
        });

        it('then it does not emit the change event', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).has.length(0);
        });
    });

    describe('when the down arrow key is pressed with enter', () => {
        beforeEach(async () => {
            await pressKey(component.getAllByRole('listbox').find(isVisible), {
                key: 'ArrowDown',
                keyCode: 40,
            });
            await pressKey(component.getAllByRole('listbox').find(isVisible), {
                key: '(Space character)',
                keyCode: 32,
            });
        });

        it('then it emits the change event with the correct data', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).has.length(1);

            const [[changeEvent]] = changeEvents;
            expect(changeEvent).has.property('index', 1);
            expect(changeEvent)
                .has.property('selected')
                .and.is.deep.equal([input.options[1].value]);
        });
    });
});

function isVisible(el) {
    return !el.hasAttribute('hidden') && !el.closest('[hidden]');
}
