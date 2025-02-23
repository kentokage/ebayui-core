const { createRenderBody, getNItems } = require('../../../../common/test-utils/shared');

function getType(i) {
    switch (i) {
        case 3:
            return 'attention';
        case 4:
            return 'information';
        default:
            return null;
    }
}

exports.ProgressStepper = {
    a11yHeadingText: 'shipment',
    step: getNItems(4, (i) => ({
        current: i === 2,
        a11yText: i === 3 && 'a11yIconLabel',
        renderBody: createRenderBody(`status ${i}`),
    })),
};

exports.ProgressStepper_NoCurrent = {
    step: getNItems(4, (i) => ({
        renderBody: createRenderBody(`status ${i}`),
    })),
};

exports.ProgressStepper_Vertical = Object.assign({}, exports.ProgressStepper, {
    direction: 'column',
});

exports.ProgressStepper_States = {
    step: getNItems(5, (i) => ({
        current: i === 1,
        type: getType(i),
        renderBody: createRenderBody(`status ${i}`),
    })),
};
