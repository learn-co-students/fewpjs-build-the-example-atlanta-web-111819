// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function likeListener(heart) {
  mimicServerCall()
    .then(res => {
      if (heart.className ==='like-glyph') {

        heart.className = 'like-glyph activated-heart'
      } else {

        heart.className = 'like-glyph'
      }
    }).catch(error => {
      const modal = document.querySelector('#modal')
      modal.className = ''
      setTimeout(() => {
        document.querySelector('#modal').className = 'hidden'
      }, 5000)
    })
}


document.addEventListener('DOMContentLoaded', (e) => {
  document.body.addEventListener('click', (e) => {
    if (e.target.localName === 'span' && e.target.className.startsWith('like-glyph')) {
      likeListener(e.target);
    }
  })
})



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
