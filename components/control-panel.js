// ====== Changing control panel location =========

const controlPanel = document.querySelector(".leaflet-top.leaflet-left")
  ?.removeChild(document.querySelector(".leaflet-top.leaflet-left")?.firstChild);

document.querySelector('.leaflet-bottom.leaflet-left')?.appendChild(controlPanel);

// ====== End of changing control panel location ========
