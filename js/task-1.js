
function getCategories() {
  return document.querySelectorAll("#categories .item");
}

function countCategories() {
    return getCategories().length;
}

function getTitleName(category) {
    return category.querySelector("h2").textContent
}

function getTitleLength(category) {
    return category.querySelectorAll("ul li").length;
}

function infoCategories() {
    console.log(`Number of categoreis: ${countCategories()}`)

    getCategories().forEach(category => {
        console.log(`Category: ${getTitleName(category)}`);
        console.log(`Elements: ${getTitleLength(category)}`);
    }) 
}


infoCategories()