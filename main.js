// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById("modal")
  let likeList = document.querySelectorAll(".like");
  console.log(likeList)

  likeList.forEach(function(item){
    item.addEventListener('click', function(event){
      heartClick(event.target)
    })
  })
})

function heartClick(heart){
  console.log(heart)
  mimicServerCall()
  .then(resp => {
    if(heart.className === "like-glyph"){
      heart.className = "like-glyph activated-heart"
      console.log(heart.className)
    }else if(heart.className === "like-glyph activated-heart"){
      heart.className = "like-glyph"
      console.log(heart.className)
    }
  })
  .catch(() => {
    document.getElementById('modal').className = "not"
    setTimeout(function(){
      document.getElementById('modal').className = "hidden"
    }, 5000)
  })
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
