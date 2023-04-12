const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

function openNav(){
  document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
  document.getElementById("mobile-menu").style.width = "0%";
}

function f(){
  console.log("sjdnjasndnaj");
}
function s(){
    console.log("sjdnjasndnaj");
    const audio = document.createElement("audio");
    audio.preload = "auto";
    audio.src = "ataque.mp3";
    audio.play();
    document.body.appendChild(audio);
 
}