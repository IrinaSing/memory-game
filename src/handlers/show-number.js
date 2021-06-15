export const showNumber = (event) => {
  const targetCell = event.target;

  if (targetCell.nodeName === "TD" && targetCell.dataset.selected === "no") {
    targetCell.className = "visible";
  }
};