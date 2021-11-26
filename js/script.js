
document.querySelector(".popup .close-btn").addEventListener("click",function() {
  document.querySelector(".popup").classList.remove("active");
  $(document).ready(function(){
    $(".fullscreen-container").fadeOut(200);
  }); 
});

function loginClick() {
  document.querySelector(".popup").classList.add("active");
  $(document).ready(function(){
    $(".fullscreen-container").fadeTo(200,1);
  });
}

// $(function() {
//   $(".fullscreen-container").fadeOut(200,1);
// });

// $(function() {
//   $(".fullscreen-container").fadeTo(200);
// });