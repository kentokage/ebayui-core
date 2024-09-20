import type { WithNormalizedProps } from "../../global";

export interface FileUploadInputEvent {
    files: FileList;
    originalEvent: Event;
}

interface FileUploadInputInput {
    multiple?: boolean;
    renderBody: Marko.Body;
    subtitle?: Marko.AttrTag<
        Marko.Input<""> & {
            renderBody?: Marko.Body;
        }
    >;
    title?: Marko.AttrTag<
        Marko.Input<`h${number}`> & {
            as?: `h${number}`;
            renderBody?: Marko.Body;
        }
    >;
    "on-input"?: (event: FileUploadInputEvent) => void;
}

export interface Input extends WithNormalizedProps<FileUploadInputInput> {}

interface State {
    draggedOver: boolean;
}

class FileUploadInput extends Marko.Component<Input, State> {
    onCreate() {
        this.state = {
            draggedOver: false,
        };
    }
    onMount() {
        const fileInput: HTMLInputElement = this.getEl("file-upload-input");

        if (fileInput) {
            fileInput.addEventListener(
                "input",
                this.handleInput.bind(this, fileInput),
            );
        }
    }

    onDestroy() {
        const fileInput: HTMLInputElement = this.getEl("file-upload-input");

        if (fileInput) {
            fileInput.removeEventListener(
                "input",
                this.handleInput.bind(this, fileInput),
            );
        }
    }

    handleDragEnter(ev: DragEvent) {
        ev.preventDefault();
        if (ev.target === this.getEl("file-upload-input")) {
            this.state.draggedOver = true;
        }
    }

    handleDragLeave(ev: DragEvent) {
        ev.preventDefault();
        if (ev.target === this.getEl("file-upload-input")) {
            this.state.draggedOver = false;
        }
    }

    handleDragOver(ev: DragEvent) {
        ev.preventDefault();
    }

    handleDrop(ev: DragEvent) {
        ev.preventDefault();
        this.state.draggedOver = false;

        if (ev.dataTransfer?.files?.length) {
            this.emit("input", {
                files: this.input.multiple
                    ? Array.from(ev.dataTransfer.files)
                    : [Array.from(ev.dataTransfer.files)[0]],
                originalEvent: ev,
            });
        }
    }

    handleInput(fileInput: HTMLInputElement, ev: Event) {
        if (fileInput.files?.length) {
            this.emit("input", { files: fileInput.files, originalEvent: ev });
        }
    }
}

export default FileUploadInput;
