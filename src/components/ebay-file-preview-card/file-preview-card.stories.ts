import { tagToString } from "../../../.storybook/storybook-code-source";
import { addRenderBodies } from "../../../.storybook/utils";
import Readme from "./README.md";
import component from "./index.marko";

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "media/ebay-file-preview-card",
    component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
    argTypes: {},
};

export const Uploading = Template.bind({});
Uploading.args = {
    a11yCancelUploadText: "Cancel upload",
    deleteText: "Delete",
    file: {
        name: "file-name.jpg",
        size: "1.2 MB",
        type: "image/jpeg",
    },
    isUploading: true,
};

Uploading.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-file-preview-card", Uploading.args),
        },
    },
};

export const Image = Template.bind({});
Image.args = {
    a11yCancelUploadText: "Cancel upload",
    deleteText: "Delete",
    file: {
        name: "file-name.jpg",
        size: "1.2 MB",
        type: "image/jpeg",
    },
    content: {
        renderBody:
            '<img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" alt="Image">',
    },
};

Image.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-file-preview-card", Image.args),
        },
    },
};

export const PortraitImage = Template.bind({});
PortraitImage.args = {
    a11yCancelUploadText: "Cancel upload",
    deleteText: "Delete",
    file: {
        name: "file-name.jpg",
        size: "1.2 MB",
        type: "image/jpeg",
    },
    content: {
        renderBody:
            '<img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-profile-pic.jpg" alt="Image">',
    },
};

PortraitImage.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-file-preview-card", PortraitImage.args),
        },
    },
};

export const LandscapeImage = Template.bind({});
LandscapeImage.args = {
    a11yCancelUploadText: "Cancel upload",
    deleteText: "Delete",
    file: {
        name: "file-name.jpg",
        size: "1.2 MB",
        type: "image/jpeg",
    },
    content: {
        renderBody:
            '<img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg" alt="Image">',
    },
};

LandscapeImage.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-file-preview-card", LandscapeImage.args),
        },
    },
};

export const Video = Template.bind({});
Video.args = {
    a11yCancelUploadText: "Cancel upload",
    deleteText: "Delete",
    file: {
        name: "file-name.mov",
        size: "1.2 MB",
        type: "video/quicktime",
    },
    labelText: "10:30:21",
    content: {
        renderBody:
            '<video src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" />',
    },
};

Video.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-file-preview-card", Video.args),
        },
    },
};

export const VideoNoLabelText = Template.bind({});
VideoNoLabelText.args = {
    a11yCancelUploadText: "Cancel upload",
    deleteText: "Delete",
    file: {
        name: "file-name.mov",
        size: "1.2 MB",
        type: "video/quicktime",
    },
    content: {
        renderBody:
            '<video src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" />',
    },
};

VideoNoLabelText.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-file-preview-card", VideoNoLabelText.args),
        },
    },
};

export const MultipleMenuActions = Template.bind({});
MultipleMenuActions.args = {
    a11yCancelUploadText: "Cancel upload",
    deleteText: "Delete",
    file: {
        name: "file-name.jpg",
        size: "1.2 MB",
        type: "image/jpeg",
    },
    menuActions: [
        {
            event: "edit",
            label: "Edit",
        },
    ],
    content: {
        renderBody:
            '<img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg" alt="MultipleMenuActions">',
    },
};

MultipleMenuActions.parameters = {
    docs: {
        source: {
            code: tagToString(
                "ebay-file-preview-card",
                MultipleMenuActions.args,
            ),
        },
    },
};

export const Document = Template.bind({});
Document.args = {
    a11yCancelUploadText: "Cancel upload",
    deleteText: "Delete",
    file: {
        name: "file-name.csv",
        size: "1.2 MB",
        type: "text/csv",
    },
    menuActions: [
        {
            event: "edit",
            label: "Edit",
        },
    ],
};

Document.parameters = {
    docs: {
        source: {
            code: tagToString(
                "ebay-file-preview-card",
                MultipleMenuActions.args,
            ),
        },
    },
};

export const SeeMoreDoc = Template.bind({});
SeeMoreDoc.args = {
    a11yCancelUploadText: "Cancel upload",
    deleteText: "Delete",
    isSeeMore: true,
    seeMoreText: "+15",
    file: {
        name: "file-name.csv",
        size: "1.2 MB",
        type: "text/csv",
    },
    menuActions: [
        {
            event: "edit",
            label: "Edit",
        },
    ],
};

SeeMoreDoc.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-file-preview-card", SeeMoreDoc.args),
        },
    },
};

export const SeeMoreImage = Template.bind({});
SeeMoreImage.args = {
    a11yCancelUploadText: "Cancel upload",
    deleteText: "Delete",
    isSeeMore: true,
    seeMoreText: "+100",
    file: {
        name: "file-name.jpg",
        size: "1.2 MB",
        type: "image/jpeg",
    },
    content: {
        renderBody:
            '<img src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg" alt="Image">',
    },
};

SeeMoreImage.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-file-preview-card", SeeMoreImage.args),
        },
    },
};
