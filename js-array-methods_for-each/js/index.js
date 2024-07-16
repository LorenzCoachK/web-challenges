const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

colors.forEach((color) => {
  const colorContainerElement = document.createElement("div");
  colorContainerElement.classList.add("color-box"); // CSS-Klasse der color-boxen aus der styles.css hinzufügen (ist ab Zeile 12 definiert)
  colorContainerElement.style.backgroundColor = color; // Hintergrundfarbe der einzelnen Box aus dem Array colors
  document.body.append(colorContainerElement); // hänge in das Dokument an die Stelle, in der der Body definiert ist, das Element "colorContainerElement"
});

function renderColorBox(color) {
  const colorContainerElement = document.createElement("div");
  colorContainerElement.classList.add("color-box"); // CSS-Klasse der color-boxen aus der styles.css hinzufügen (ist ab Zeile 12 definiert)
  colorContainerElement.style.backgroundColor = color; // Hintergrundfarbe der einzelnen Box aus dem Array colors
  document.body.append(colorContainerElement); // hänge in das Dokument an die Stelle, in der der Body definiert ist, das Element "colorContainerElement"
}

colors.forEach(renderColorBox);
colors.forEach(renderColorBox);
