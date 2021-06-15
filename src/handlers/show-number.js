export const showNumber = (event) => {
  const targetCell = event.target;

  if (targetCell.nodeName === "TD" && targetCell.dataset.selected === "no") {
    targetCell.className = "visible";
};

export const hideNumber = (event) => {
  const targetCell = event.target;

if (
  targetCell.className === "visible" &&
  targetCell.dataset.selected === "no"
) {
  targetCell.className = "hidden";
}

};
