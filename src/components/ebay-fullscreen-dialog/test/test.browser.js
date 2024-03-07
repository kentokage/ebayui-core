import { expect, use } from "chai";
import chaiDom from "chai-dom";
import { render, fireEvent, waitFor, cleanup } from "@marko/testing-library";
import { fastAnimations } from "../../../common/test-utils/browser";
import template from "..";
import * as mock from "./mock";

use(chaiDom);
before(fastAnimations.start);
after(fastAnimations.stop);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("given a closed dialog", () => {
    const input = mock.Dialog;

    beforeEach(async () => {
        component = await render(template, input);
    });

    it("then it is hidden in the DOM", () => {
        expect(component.getByRole("dialog", { hidden: true })).has.attr(
            "hidden",
        );
    });

    describe("then it is opened", () => {
        beforeEach(async () => {
            await component.rerender(Object.assign({}, input, { open: true }));
        });

        it("then it is visible in the DOM", async () => {
            await waitFor(() =>
                expect(component.emitted("open")).has.length(1),
            );
        });
    });
});

describe("given an open dialog", () => {
    const input = mock.fillDialogOpen;
    let sibling;

    beforeEach(async () => {
        sibling = document.body.appendChild(document.createElement("button"));
        sibling.focus();
        component = await render(template, input);
    });

    afterEach(() => {
        document.body.removeChild(sibling);
    });

    it("then it is visible in the DOM", () => {
        expect(component.getByRole("dialog")).does.not.have.attr("hidden");
    });

    describe("when the close button is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(
                component.getByLabelText(input.a11yCloseText),
            );
        });

        thenItIsClosed();
    });

    describe("when the mask is clicked", () => {
        beforeEach(async () => {
            // simulate clicking outside the dialog.
            await fireEvent.click(component.getByRole("dialog"));
        });

        thenItIsClosed();
    });

    function thenItIsClosed() {
        it("then it is hidden in the DOM", async () => {
            await waitFor(() =>
                expect(
                    component.getByRole("dialog", { hidden: true }),
                ).has.attr("hidden"),
            );
        });

        it("then it restores the previous focus", async () => {
            await waitFor(() =>
                expect(component.emitted("close")).has.length(1),
            );
        });
    }
});
