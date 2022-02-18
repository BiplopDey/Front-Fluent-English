import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Word from "../../components/word";
import wordDto from "../../domain/wordDto";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("render word o word form", () => {
  act(() => {
    render(
      <Word word={wordDto(1, "nombre", "2", "3", true, false)} />,
      container
    );
  });
  expect(container.textContent).toMatch(/nombre/);
});
