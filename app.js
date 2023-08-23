const cell_control = document.querySelector("#cell-control");
const cell_control_label = document.querySelector("#cell-control-label");
const color_control = document.querySelector("#color-control");
const color_control_label = document.querySelector("#color-control-label");
const board = document.querySelector("#board");

let cell_count = 16;
let drawing = false;
let current_color = "#000000";

const make_cell = (parent) => {
  const div = document.createElement("div");
  div.className = "cell";
  div.addEventListener("mouseover", (e) => {
    if (drawing) e.currentTarget.style.backgroundColor = current_color;
  });
  div.addEventListener("click", (e) => {
    e.currentTarget.style.backgroundColor = current_color;
  });
  parent.appendChild(div);
};

const new_parent = () => {
  let parent = document.createElement("div");
  parent.className = "cells";
  return parent;
};

const init = (row, col) => {
  for (let i = 0; i < row; i++) {
    parent = new_parent();
    for (let j = 0; j < col; j++) {
      make_cell(parent);
    }
    board.appendChild(parent);
  }
};

cell_control.addEventListener("change", (e) => {
  cell_count = e.target.value;
  cell_control_label.innerHTML = e.target.value;
  board.replaceChildren([]);
  init(cell_count, cell_count);
});

color_control.addEventListener("change", (e) => {
  current_color = e.target.value;
  color_control_label = e.target.value;
});

board.onmouseup = () => {
  drawing = false;
};

board.onmousedown = () => {
  drawing = true;
};

init(cell_count, cell_count);
