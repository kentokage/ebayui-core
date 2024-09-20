import { tagToString } from "../../../.storybook/storybook-code-source";
import { addRenderBodies } from "../../../.storybook/utils";
import Readme from "./README.md";
import component from "./index.marko";
import MultilineSubtitleTemplate from "./examples/multiline-subtitle.marko";
import MultilineSubtitleCode from "./examples/multiline-subtitle.marko?raw";
import MultipleFilesTemplate from "./examples/multiple-files.marko";
import MultipleFilesCode from "./examples/multiple-files.marko?raw";
import RestrictedFilesTemplate from "./examples/restricted-files.marko";
import RestrictedFilesCode from "./examples/restricted-files.marko?raw";

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "form input/ebay-file-upload-input",
    component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
    argTypes: {
        multiple: {
            type: "boolean",
            control: { type: "boolean" },
            description: "Whether multiple files can be uploaded",
        },
        renderBody: {
            control: { type: "text" },
            description: "CTA render body",
        },
        subtitle: {
            name: "@subtitle",
            table: {
                category: "@attribute tags",
            },
        },
        title: {
            name: "@title",
            table: {
                category: "@attribute tags",
            },
        },
        onInput: {
            action: "on-input",
            description: "Triggered when the file(s) are uploaded",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, files }",
                },
            },
        },
    },
};

export const Default = Template.bind({});
Default.args = {
    title: {
        renderBody: "Title",
    },
    subtitle: {
        renderBody: "Subtitle",
    },
    renderBody: "Browse files",
};

Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-file-upload-input", Default.args),
        },
    },
};

export const MultilineSubtitle = (args) => ({
    input: args,
    component: MultilineSubtitleTemplate,
});
MultilineSubtitle.args = {};
MultilineSubtitle.parameters = {
    docs: {
        source: {
            code: MultilineSubtitleCode,
        },
    },
};

export const MultipleFiles = (args) => ({
    input: args,
    component: MultipleFilesTemplate,
});
MultipleFiles.args = {};
MultipleFiles.parameters = {
    docs: {
        source: {
            code: MultipleFilesCode,
        },
    },
};

export const RestrictedFiles = (args) => ({
    input: args,
    component: RestrictedFilesTemplate,
});
RestrictedFiles.args = {};
RestrictedFiles.parameters = {
    docs: {
        source: {
            code: RestrictedFilesCode,
        },
    },
};
