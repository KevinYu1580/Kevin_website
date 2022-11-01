// nav動畫

//**點擊連結後body.opacity=0, 載入後再將opacity=1
$(document).ready(function(){
    $('body').css('opacity','1')
})

function changeURL(x, y) {
  $(x).click(function () {
    $('body')
      .css("opacity", "0")
      .then(
        setTimeout(() => {
          location.href = y;
        }, 300)
      );
  });
}
changeURL("#linkToIndex", "./index.html");
changeURL("#linkToSkills", "./skills.html");
changeURL("#linkToCollections", "./collections.html");
changeURL("#linkToContact", "./contact.html");


// Menu_mb動畫
$(".menu_mb").click(function () {
  $(".mb_slider").toggleClass("menuToggle");
});

// 光箱內容
$(".collection_card").click(function () {
  const coverPic = $(this).find(".coverPic").css("background-image");
  const title = $(this).find(".title").text().trim();
  const content = $(this).find(".briefInfo").text().trim();
  const link = $(this).find(".link").text().trim();
  const label = $(this).find(".labelWrap").html();

  $(".modal-title").text(title);
  $(".modal-body .myContent").text(content);
  $(".modal-content .collectlink").attr("href", link);
  $(".modal-body .labelWrap").html(label);
});
