import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Word from "../../components/word";
import WordForm from "../../components/wordForm";
import wordDto from "../../domain/wordDto";

let container = null;
beforeEach(() => {
  container = document.createElement("tbody");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("render word by defaul", () => {
  act(() => {
    render(
      <Word word={wordDto(1, "nombre", "2", "3", true, false)} />,
      container
    );
  });
  expect(container.textContent).toMatch(/nombre/);
});

it("render word form when clicking ", () => {
  act(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    render(
      <Word word={wordDto(1, "nombre", "2", "3", true, false)} />,
      container
    );
  });

  const button = document.querySelector("[data-testid=toggle]");
  expect(button.innerHTML).toBe("Edit");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  const cancelButton = document.querySelector("[data-testid=toggle]");
  expect(cancelButton.innerHTML).toBe("Cancel");
});
