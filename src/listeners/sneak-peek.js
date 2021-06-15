import { showNumber } from "../handlers/show-number.js";
import { hideNumber } from "../handlers/show-number.js";

const cell = document.getElementById("tiles");

cell.addEventListener("mouseover", showNumber);
cell.addEventListener("mouseout", hideNumber);
