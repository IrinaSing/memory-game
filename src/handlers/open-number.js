export const openNumber = (event) => {
  const targetCell = event.target;
  if (targetCell.nodeName === "TD" && targetCell.className === "hidden") {
    targetCell.dataset.selected = "yes";
    targetCell.className = "visible";
  } else if (
    targetCell.nodeName === "TD" &&
    targetCell.className === "visible"
  ) {
    targetCell.dataset.selected = "no";
    targetCell.className = "hidden";
  }
};

/*export const openedCells = document.querySelectorAll("td[data-selected='no']");
[...openedCells].forEach((tdcell) =>
  console.log(tdcell.getAttribute("data-selected='no'"))
);
*/
