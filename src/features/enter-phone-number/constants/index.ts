import { KeyboardKeyType } from "../ui/keyboard-key";

export const rowLength = 3;

export const keys: KeyboardKeyType[] = [
  {
    type: "number",
    value: 1,
    label: "1",
    focusId: 0,
    moves: {
      left: -1,
      right: 1,
      down: rowLength,
    },
  },
  {
    type: "number",
    value: 2,
    label: "2",
    focusId: 1,
    moves: {
      left: -1,
      right: 1,
      down: rowLength,
    },
  },
  {
    type: "number",
    value: 3,
    label: "3",
    focusId: 2,
    moves: {
      left: -1,
      right: 1,
      down: rowLength,
    },
  },
  {
    type: "number",
    value: 4,
    label: "4",
    focusId: 3,
    moves: {
      left: -1,
      right: 1,
      up: -rowLength,
      down: rowLength,
    },
  },
  {
    type: "number",
    value: 5,
    label: "5",
    focusId: 4,
    moves: {
      left: -1,
      right: 1,
      up: -rowLength,
      down: rowLength,
    },
  },
  {
    type: "number",
    value: 6,
    label: "6",
    focusId: 5,
    moves: {
      left: -1,
      right: 1,
      up: -rowLength,
      down: rowLength,
    },
  },
  {
    type: "number",
    value: 7,
    label: "7",
    focusId: 6,
    moves: {
      left: -1,
      right: 1,
      up: -rowLength,
      down: rowLength,
    },
  },
  {
    type: "number",
    value: 8,
    label: "8",
    focusId: 7,
    moves: {
      left: -1,
      right: 1,
      up: -rowLength,
      down: rowLength - 1,
    },
  },
  {
    type: "number",
    value: 9,
    label: "9",
    focusId: 8,
    moves: {
      left: -1,
      right: 1,
      up: -rowLength,
      down: rowLength - 1,
    },
  },
  {
    type: "erase",
    value: 0,
    label: "Стереть",
    focusId: 9,
    moves: {
      left: -1,
      right: 1,
      up: -(rowLength - 1),
      down: 2,
    },
  },
  {
    type: "number",
    value: 0,
    label: "0",
    focusId: 10,
    moves: {
      left: -1,
      right: 1,
      up: -(rowLength - 1),
      down: 1,
    },
  },
];
