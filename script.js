// ハンバーガーメニュー
    $(function() {
            $("#drawer_toggle").click(function() {
            $(this).toggleClass('open');
            $("#global_nav").slideToggle();
        });
    });

// トップへ戻るボタン
const BottonToTop = document.querySelector(".c-topbtn")

BottonToTop.addEventListener("click", function() {
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