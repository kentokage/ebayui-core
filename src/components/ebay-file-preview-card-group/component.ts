import {
    FilePreviewCardEvent,
    FilePreviewCardInput,
} from "../ebay-file-preview-card/component";

interface FilePreviewCardGroupInput {
    files: FilePreviewCardInput[];
    "on-menu-action"?: (event: FilePreviewCardEvent) => void;
}

class FilePreviewCardGroup extends Marko.Component<FilePreviewCardGroupInput> {}

export default FilePreviewCardGroup;
