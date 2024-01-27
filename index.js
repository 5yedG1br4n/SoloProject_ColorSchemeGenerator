const colorForm = document.getElementById("color-form");

colorForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const colorFormData = new FormData(colorForm);
  const colorInputValue = colorFormData.get("colorInput");
  const colorSelectValue = colorFormData.get("colors");

  const colorHexValue = colorInputValue.slice(1);

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorHexValue}&mode=${colorSelectValue}`
  )
    .then((response) => response.json())
    .then((data) => renderColorScheme(data.colors));
});

function renderColorScheme(colorsArr) {
  const colorsContainer = document.getElementById("colors-container");
  const colorIdContainer = document.getElementById("color-id-container");
  let colorHtml = "";
  let colorTemplates = "";

  colorsArr.forEach((color) => {
    colorHtml += `<div id="${color.hex.value}" style="background-color: ${color.hex.value};"></div>`;
    colorTemplates += `<p>${color.hex.value}</p>`;
  });

  colorsContainer.innerHTML = colorHtml;
  colorIdContainer.innerHTML = colorTemplates;
}
