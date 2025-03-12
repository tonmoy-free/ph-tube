console.log("index is connected");


function loadCategories() {
    //1- fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        //2- convert promise to json
        .then((res) => res.json())
        //3- send data to display
        .then((data) => displayCategories(data.categories));
}

function loadVideos() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((response) => response.json())
        .then((data) => displayVideos(data.videos));
}
// {
//     "category_id": "1001",
//     "category": "Music"
// }

function displayCategories(categories) {
    // console.log(categories)
    //get the container
    const categoryContainer = document.getElementById("category-container");

    //Loop operation on array of object
    for (let cat of categories) {
        // console.log(cat);

        //create element
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
        //Append The Element
        categoryContainer.append(categoryDiv);
    }

}


// {
//     "category_id": "1001",
//     "video_id": "aaah",
//     "thumbnail": "https://i.ibb.co/hY496Db/coloer-of-the-wind.jpg",
//     "title": "Colors of the Wind",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/6r4cx4P/ethen-clack.png",
//             "profile_name": "Ethan Clark",
//             "verified": true
//         }
//     ],
//     "others": {
//         "views": "233K",
//         "posted_date": "16090"
//     },
//     "description": "Ethan Clark's 'Colors of the Wind' is a vibrant musical exploration that captivates listeners with its rich, expressive melodies and uplifting rhythm. With 233K views, this song is a celebration of nature's beauty and human connection, offering a soothing and enriching experience for fans of heartfelt, nature-inspired music."
// }
const displayVideos = (videos) => {
    const videoContainer = document.getElementById("video-container");

    videos.forEach((video) => {
        console.log(video);

        const videoCard = document.createElement("div");
        videoCard.innerHTML = `
    <div class="card bg-base-100 ">
                <figure class="relative">
                    <img class="w-full h-[150px] object-cover"
                        src="${video.thumbnail}"
                        alt="Shoes" />
                    <span
                        class="absolute bottom-2 right-2 text-white text-sm rounded bg-black px-2">3hrs
                        56 min ago</span>
                </figure>
                <div class="flex gap-3 px-0 py-5">
                    <div class="profile">
                        <div class="avatar">
                            <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                          </div>
                    </div>
                    <div class="intro">
                        <h2 class="text-sm font-semibold">Midnight Serenade</h2>
                        <p class="text-sm text-gray-400 flex gap-1">Awlad Hossain <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="" srcset=""></p>
                        <p class="text-sm text-gray-400">91K views</p>
                    </div>
                </div>
            </div>
        `
        //append
        videoContainer.append(videoCard);
    });

};

loadCategories();
loadVideos()