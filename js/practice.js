


const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
];



// Простий спосіб з використанням document.createElement() і elem.append()

// const gallery = document.querySelector(".gallery");

// const elem = images.map(image => {
//     const li = document.createElement("li");
//     li.classList.add("gallery-item");

//     const img = document.createElement("img");
//     img.classList.add("gallery-img");
//     img.src = image.url;
//     img.alt = img.alt;
    
//     li.append(img);
//     return li;


// });
// console.log(elem);
// gallery.append(...elem);



// Спосіб з використанням функцій та з перевіркою на вміст url i alt
function createImgEl(image) {
    const imgEl = document.createElement("img");
    imgEl.classList.add("gallery-img");
    imgEl.src = image?.url || ""; //Перевірка url
    imgEl.alt = image?.alt || "Gallery image"; // Перевірка alt
    imgEl.loading = "lazy";
    return imgEl;
};

function createGalleryItem(image) {
    const liEl = document.createElement("li");
    liEl.classList.add("gallery-item");
    const img = createImgEl(image);
    liEl.append(img);
    return liEl;    
};

function buildGalleryItem(images) {
  if (!Array.isArray(images)) { //Перевірка чи images це масив
    console.warn("images має бути масивом")
    return [];
  };  
  return images.map(createGalleryItem); 
};

function renderGallery(container, items) {
  if (!(container instanceof Element)) {
    console.warn("Контейнер не знайдено"); //Перевірка чи контейнер є HTML елементом
    return;
  };
  
  container.append(...items);
};

function initGallery(selector, images) {
    const container = document.querySelector(selector);
    const items = buildGalleryItem(images);
    renderGallery(container, items)
};



initGallery(".gallery", images);







