const starsElement = document.querySelectorAll(".fa-star");

const emojisEl = document.querySelectorAll(".fa-regular");

const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0);

starsElement.forEach((starElement, index) => {
  starElement.addEventListener("click",() => {
    updateRating(index)
  });
});

function updateRating(index) {
  starsElement.forEach((starElement, idx) => {
    if(idx < index + 1){
      starElement.classList.add("active");
    }else{
      starElement.classList.remove("active");
    }
  });

  emojisEl.forEach((emojiEl) => {
    emojiEl.style.transform = `translateX(-${index * 50}px)`;
    emojiEl.style.color = colorsArray[index]
  });
}