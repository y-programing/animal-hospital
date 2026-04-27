// ハンバーガーメニュー
    // $(function() {
    //         $("#drawer_toggle").click(function() {
    //         $(this).toggleClass('open');
    //         $("#global_nav").slideToggle();
    //     });
    // });
const hambergur = document.querySelector("#drawer_toggle")
const GlobalNavigation = document.querySelector("#global_nav")

hambergur.addEventListener("click", function() {
    hambergur.classList.toggle('open')
  GlobalNavigation.classList.toggle('open')
  if(hambergur.classList.contains("open")){
    GlobalNavigation.style.height = GlobalNavigation.scrollHeight + 'px'
  } else {
   GlobalNavigation.style.height = "0"
  }
});

// トップへ戻るボタン
const ButtonToTop = document.querySelector(".c-topbtn")

ButtonToTop.addEventListener("click", function() {
    window.scroll({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", scroll_event);
function scroll_event() {
  if (window.pageYOffset > 100) {
    pagetop_btn.style.opacity = "1";
  } else if (window.pageYOffset < 100) {
    pagetop_btn.style.opacity = "0";
  }
}