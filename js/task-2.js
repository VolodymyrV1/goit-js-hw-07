// МЕТОД 1 простіший

// function addElem(element) {
//   const linkGal = document.querySelector(".gallery");
//   const lastItem = document.createElement("li");
//   const createImg = document.createElement("img");
//   createImg.src = element.url;
//   createImg.alt = element.alt;
//   lastItem.appendChild(createImg)
//   linkGal.append(lastItem);
   
// }
// function doingGalery(images) {
//   images.forEach(element => {
//     addElem(element)
//   });
// }


// МЕТОД 2 складніший, переробив на фунції, бо після 1 методу вирішення розумів,
// що можна таке ж зробити через функії, тому з допомогою чату написав метод 2

function createImage({ url, alt }) {
  const createImg = document.createElement("img");
  createImg.classList.add("img")
  createImg.src = url;
  createImg.alt = alt;
  return createImg;
}


function createListItem(imageInf) {
  const lastItem = document.createElement("li");
  lastItem.appendChild(createImage(imageInf));
  return lastItem;
}

function addElem(element) {
  const linkGal = document.querySelector(".gallery");
  const li = createListItem(element);
  linkGal.appendChild(li);
  
}

function doingGalery(images) {
  images.forEach(element => addElem(element));
}





const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];






doingGalery(images)