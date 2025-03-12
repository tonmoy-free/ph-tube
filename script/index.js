console.log("index is connected");


function loadCategories(){
    //fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=>res.json())
    .then((data)=>console.log(data));
}

loadCategories();