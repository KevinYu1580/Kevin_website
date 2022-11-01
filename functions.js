// nav動畫

//**點擊連結後body.opacity=0, 載入後再將opacity=1
$(document).ready(function(){
    $('body').css('opacity','1')
})

function changeURL(x, y) {
  $(x).click(function () {
    $('body').css("opacity", "0")
      .then(
        setTimeout(() => {
          location.href = y;
        }, 300)
      );
  });
}
changeURL("#linkToIndex_pc", "./index.html");
changeURL("#linkToSkills_pc", "./skills.html");
changeURL("#linkToCollections_pc", "./collections.html");
changeURL("#linkToContact_pc", "./contact.html");
changeURL("#linkToIndex_mb", "./index.html");
changeURL("#linkToSkills_mb", "./skills.html");
changeURL("#linkToCollections_mb", "./collections.html");
changeURL("#linkToContact_mb", "./contact.html");


// Menu_mb動畫
$(".menu_mb").click(function () {
  $(".mb_slider").toggleClass("menuToggle");
});



// 光箱內容



$(".collection_card").click(function () {
  const coverPic = $(this).find(".coverPic").find('img').attr('src');
  const title = $(this).find(".title").html();
  const content = $(this).find(".briefInfo").html();
  const label = $(this).find(".labelWrap").html();

  $(".modal-body .boxPic img").attr("src",coverPic)
  $(".modal-title").text(title);
  $(".modal-body .myContent").html(content);
  $(".modal-body .labelWrap").html(label);

  // ----link的數量
  const linkNum = $(this).find('.link').length
  const linkAry = []

  $('.modal-content .linkWrap').empty()

  for(let n=0;n<linkNum;n++){
    const link = $(this).find(`#link${n+1}`).text().trim()
    linkAry.push(link)
    
    $('.modal-content .linkWrap').append(`<a class="collectlink" href="${linkAry[n]}" target="blank">作品連結${n+1}</a>`)
  }
  // 如果只有一個連結, 則連結文字沒有+數字
  if(linkAry.length < 2){
    $('.linkWrap .collectlink').text('作品連結')
  }
  
});

