
function updateBanner() {
  const file = document.getElementById("bannerUpload").files[0];
  const reader = new FileReader();
  reader.onload = () => {
    localStorage.setItem("bannerImage", reader.result);
    document.getElementById("banner").src = reader.result;
  };
  if (file) reader.readAsDataURL(file);
}

function loadAdminPage() {
  const banner = localStorage.getItem("bannerImage");
  if (banner) document.getElementById("banner").src = banner;
  displayParts();
  displayAccessories();
}

function addPart() {
  const parts = JSON.parse(localStorage.getItem("parts") || "[]");
  parts.push({
    name: document.getElementById("partName").value,
    partNumber: document.getElementById("partNumber").value,
    price: document.getElementById("partPrice").value,
    make: document.getElementById("partMake").value,
    model: document.getElementById("partModel").value,
    year: document.getElementById("partYear").value,
    category: document.getElementById("partCategory").value,
    subcategory: document.getElementById("partSubcategory").value
  });
  localStorage.setItem("parts", JSON.stringify(parts));
  displayParts();
}

function addAccessory() {
  const accs = JSON.parse(localStorage.getItem("accessories") || "[]");
  accs.push({
    name: document.getElementById("accName").value,
    partNumber: document.getElementById("accNumber").value,
    price: document.getElementById("accPrice").value,
    make: document.getElementById("accMake").value,
    model: document.getElementById("accModel").value,
    year: document.getElementById("accYear").value,
    category: document.getElementById("accCategory").value,
    subcategory: document.getElementById("accSubcategory").value
  });
  localStorage.setItem("accessories", JSON.stringify(accs));
  displayAccessories();
}

function displayParts() {
  const container = document.getElementById("partsManager");
  const parts = JSON.parse(localStorage.getItem("parts") || "[]");
  container.innerHTML = parts.map(p => `<div class='item'>${p.name} - ${p.partNumber} - €${p.price}</div>`).join("");
}

function displayAccessories() {
  const container = document.getElementById("accessoriesManager");
  const accs = JSON.parse(localStorage.getItem("accessories") || "[]");
  container.innerHTML = accs.map(a => `<div class='item'>${a.name} - ${a.partNumber} - €${a.price}</div>`).join("");
}
