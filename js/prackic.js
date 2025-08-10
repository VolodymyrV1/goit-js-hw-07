// Завдання 2 спробувати переробити

// МЕТОД 1 простіший

// function addElem(element) {
//   const linkGal = document.querySelector('.gallery');
//   const lastItem = document.createElement('li');
//   const createImg = document.createElement('img');
//   createImg.src = element.url;
//   createImg.alt = element.alt;
//   lastItem.appendChild(createImg);
//   linkGal.append(lastItem);
// }
// function doingGalery(images) {
//   images.forEach(element => {
//     addElem(element);
//   });
// }

// МЕТОД 2 складніший, переробив на фунції, бо після 1 методу вирішення розумів,
// що можна таке ж зробити через функії, тому з допомогою чату написав метод 2

// function createImage({ url, alt }) {
//   const createImg = document.createElement('img');
//   createImg.classList.add('img');
//   createImg.src = url;
//   createImg.alt = alt;
//   return createImg;
// }

// function createListItem(imageInf) {
//   const lastItem = document.createElement('li');
//   lastItem.appendChild(createImage(imageInf));
//   return lastItem;
// }

// function addElem(element) {
//   const linkGal = document.querySelector('.gallery');
//   const li = createListItem(element);
//   linkGal.appendChild(li);
// }

// function doingGalery(images) {
//   images.forEach(element => addElem(element));
// }

// doingGalery(images);
