document.oncontextmenu = function(e){
	ks.notice("为了浏览体验，请勿右键~", {
    time: 1500,
  });
}
//阅读进度条
document.addEventListener("DOMContentLoaded", function () {
  let winHeight = window.innerHeight,
    docHeight = document.documentElement.scrollHeight,
    progressBar = document.querySelector("#content_progress");
  progressBar.max = docHeight - winHeight;
  progressBar.value = window.scrollY;

  document.addEventListener("scroll", function () {
    progressBar.max =
      document.documentElement.scrollHeight - window.innerHeight;
    progressBar.value = window.scrollY;
  });
});
/*逐字打印标题*/
{
  let i = 0;
  let str = "共享工作室";
  window.onload = function typing() {
    //获取div
    let mydiv = document.getElementById("title");
    mydiv.innerHTML += str.charAt(i);
    i++;
    let id = setTimeout(typing, 200);
    if (i == str.length) {
      clearTimeout(id);
    }
  };
}
