import { tagToString } from '../../../.storybook/storybook-code-source';
import { addRenderBodies } from '../../../.storybook/utils';
import Readme from './README.md';
import Component from './';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'ebay-progress-stepper',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        direction: {
            type: 'enum',
            control: { type: 'select' },
            options: ['row', 'column'],
            description:
                'Will display stepper as a vertical column or horizontal row. Default is "row"',
        },
        defaultState: {
            type: 'enum',
            control: { type: 'select' },
            options: ['complete', 'upcoming', 'active'],
            description:
                'If complete, then all items will be in complete state by default. If upcoming, all items will be in upcoming state. Otherwise, the default (active), will change items based on the `current` item.',
        },
        autoParagraph: {
            type: 'boolean',
            control: { type: 'boolean' },
            description:
                'Specify whether to auto wrap @step body text with a paragraph tag (default: true)',
        },
        a11yHeadingTag: {
            defaultValue: {
                summary: 'h2',
            },
            control: { type: 'text' },
            description: 'heading tag for progress stepper',
        },
        a11yHeadingText: {
            type: 'string',
            control: { type: 'text' },
            description: 'heading text for progress stepper which will be clipped',
        },
        step: {
            name: '@step',
            description: '',
            table: {
                category: '@attribute tags',
            },
        },
        title: {
            name: '@title',
            description:
                'The bolded title for each step. Will be rendered in an `h4` by default. In order to override, pass the `as` attribute. `<@title as="h3">Title</@title>`. All other attributes will be passed through to the header tag',
            table: {
                category: '@step subtags',
                control: false,
            },
        },
        current: {
            type: 'boolean',
            control: { type: 'boolean' },
            table: {
                category: '@step attributes',
                control: false,
            },
            description:
                'The current step. Only first step that has this attribute will be considered current. All steps before will be rendered as complete, and all after will render as upcoming. If not present on any item, then will render based on `default-state` attribute',
        },
        a11yText: {
            table: {
                category: '@step attributes',
                control: false,
            },
            type: 'string',
            description:
                'The accessibility text for the icon. Defaults to either complete, upcoming, current, issue, or blocked depending on type or current',
        },
        type: {
            table: {
                category: '@step attributes',
                control: false,
            },
            type: 'enum',
            control: { type: 'select' },
            options: [`attention`, `information`, `complete`],
            description:
                'Either `attention`, `information`, or `complete`. This takes prescedence over current. Will render the current step with the given icon and color',
        },
    },
};

export const InProgress = Template.bind({});
InProgress.args = {
    step: [
        {
            title: { renderBody: 'Started' },
            renderBody: 'July 3rd',
        },

        {
            title: { renderBody: 'Shipped' },
            renderBody: 'July 4th',
        },
        {
            current: true,
            title: { renderBody: 'Transit' },
            renderBody: 'July 5th',
        },
        {
            title: { renderBody: 'Delivered' },
            renderBody: 'July 6th',
        },
    ],
    a11yHeadingTag: '',
    a11yHeadingText: 'Shipment progress',
};
InProgress.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-progress-stepper', InProgress.args, { step: 'step' }),
        },
    },
};

export const Blocked = Template.bind({});
Blocked.args = {
    step: [
        {
            title: { renderBody: 'Started' },
            renderBody: 'July 3rd',
        },

        {
            title: { renderBody: 'Shipped' },
            renderBody: 'July 4th',
        },
        {
            current: true,
            type: 'attention',
            title: { renderBody: 'Blocked' },
            renderBody: 'July 5th',
        },
        {
            title: { renderBody: 'Delivered' },
            renderBody: 'July 6th',
        },
    ],
    a11yHeadingTag: '',
    a11yHeadingText: 'Shipment progress, shipment is blocked',
};
Blocked.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-progress-stepper', Blocked.args, { step: 'step' }),
        },
    },
};

export const Information = Template.bind({});
Information.args = {
    step: [
        {
            title: { renderBody: 'Started' },
            renderBody: 'July 3rd',
        },

        {
            title: { renderBody: 'Shipped' },
            renderBody: 'July 4th',
        },
        {
            current: true,
            type: 'information',
            title: { renderBody: 'Information' },
            renderBody: 'July 5th',
        },
        {
            title: { renderBody: 'Delivered' },
            renderBody: 'July 6th',
        },
    ],
    a11yHeadingTag: '',
    a11yHeadingText: 'Shipment progress, waiting for more info.',
};
Information.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-progress-stepper', Information.args, { step: 'step' }),
        },
    },
};
