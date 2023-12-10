const elList = document.querySelector(".list");
const elBtnSpan = document.querySelector(".btn-span");
const elBtn = document.querySelector(".button");
let spanId = 2;
function renderFunc(arr) {
  elList.innerHTML = "";
  console.log(arr);
  arr.data.forEach((item) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = item.email;
    link.textContent = "Email";
    const img = document.createElement("img");
    img.src = item.avatar;
    const firstName = document.createElement("p");
    firstName.innerHTML = `<strong>First-name:</strong> ${item.first_name}`;
    const lastName = document.createElement("p");
    lastName.innerHTML = `<strong>Last-name:</strong> ${item.last_name}`;

    listItem.setAttribute(
      "class",
      "col-3 d-flex flex-column m-5 p-0 border raunded-3"
    );
    lastName.setAttribute("class", "fs-5 ms-3");
    firstName.setAttribute("class", "fs-5 mt-4 ms-3");
    link.setAttribute("class", " ms-3 mb-3");

    listItem.append(img, firstName, lastName, link);
    elList.appendChild(listItem);
  });
  elBtnSpan.textContent = spanId;
}
let id = 1;
elBtn.addEventListener("click", () => {
  spanId = spanId == 2 ? 1 : 2;
  id = id == 2 ? 1 : 2;
  elBtnSpan.textContent = spanId;
  func(id);
});
func(id);
function func(id) {
  fetch(`https://reqres.in/api/users?page=${id}`)
    .then((response) => response.json())
    .then((gg) => renderFunc(gg));
}
