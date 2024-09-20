import type { AttrString } from "marko/tags-html";

export interface FilePreviewCardEvent {
    file: File;
    menuAction: FilePreviewCardMenuAction;
    originalEvent: Event;
}

export type FilePreviewCardMenuAction = {
    event: string;
    label: string;
};

export interface FilePreviewCardInput {
    a11yCancelUploadText: AttrString;
    content?: Marko.Body;
    deleteText: AttrString;
    file: File;
    isSeeMore?: boolean;
    isUploading?: boolean;
    labelText?: AttrString;
    menuActions?: FilePreviewCardMenuAction[];
    seeMoreText?: AttrString;
    "on-menu-action"?: (event: FilePreviewCardEvent) => void;
}

class FilePreviewCard extends Marko.Component<FilePreviewCardInput> {
    getFileURL(file: File) {
        return URL.createObjectURL(file);
    }
}

export default FilePreviewCard;
