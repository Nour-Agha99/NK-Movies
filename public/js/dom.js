const searchIcon = document.querySelector(".fa-magnifying-glass");
const search = document.querySelector(".search");
const closeSearch = document.querySelector(".del");
const searchContent = document.querySelector(".content-search");
const photo = document.querySelector(".photo");
let titleFace= document.querySelector(".face-landing h2");
let yearFace = document.querySelector(".face-landing .year");
let paragraphFace = document.querySelector(".face-landing p");
let input = document.querySelector("#input");
let sendBtn = document.querySelector(".send-btn");

searchIcon.addEventListener("click",()=>{
  search.classList.toggle("hide")
  searchIcon.classList.toggle("active")
})

closeSearch.addEventListener("click",()=>{
  search.classList.toggle("hide")
  searchIcon.classList.toggle("active")
})

const createEle = (element, className) => {
  const ele = document.createElement(element);
  ele.className = className;
  return ele;
};
const createDom = (response, thePlace) => {
  searchContent.textContent = "";
  response.forEach((element) => {
    const movCard = createEle('div', 'mov-card');
    const movImg = createEle('img', 'mov-img');
    movImg.src = `https://image.tmdb.org/t/p/w500${element.backdrop_path}`;
    if(movImg.src == `https://image.tmdb.org/t/p/w500null`){
      movImg.src = `https://cdn.xxl.thumbs.canstockphoto.com/image-not-available-written-in-chalk-on-a-blackboard-stock-image_csp8317846.jpg`
    }
    movImg.alt = element.title;
    movImg.title = element.title;
    const movDetails = createEle('div', 'mov-details');
    movCard.appendChild(movImg)
    movCard.appendChild(movDetails)
    const movTitle = createEle('p', 'mov-title');
    let partOfTitle = element.title.split(":").slice(0,1);
    movTitle.textContent = partOfTitle;
    const movYear = createEle('p', 'mov-year');
    movYear.textContent = element.release_date.slice(0, 4);
    movDetails.appendChild(movTitle);
    movDetails.appendChild(movYear);
    thePlace.append(movCard);
  });
};

sendBtn.addEventListener("click", ()=>{
  let inputValue = input.value;
  fetch(`/movie/${inputValue}`)
 .then(result => result.json())
 .then(result => createDom(result.results,searchContent));
 input.value = ""
 })

 fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b9da8a8928ade30c5680978edd9a4330`)
.then(result => result.json())
.then(result => {
  yearFace.textContent=result.results[0].release_date.slice(0, 4);
  titleFace.textContent=result.results[0].title.split(":").slice(0,1);
  paragraphFace.textContent=result.results[0].overview;
  createDom(result.results,photo);
  search.style.height=`${document.body.clientHeight}px`;
});
