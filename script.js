// 时间
function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(() => {
  updateTime();
}, 1000);

const clockElem = document.createElement('div');
clockElem.id = 'clock';
document.getElementById('date').after(clockElem);




//focus
window.onload = function() {
  document.getElementById("search-input").focus();
}

//搜索引擎的切换与使用
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // 阻止表单默认提交行为

  const searchInput = document.getElementById('search-input').value; // 获取搜索关键词
  const searchEngine = document.getElementById('search-engine').value; // 获取搜索引擎 URL

  let result = '';
// 根据搜索引擎选择不同的参数
if (searchEngine.includes('baidu')) {
  result = `${searchEngine}?wd=${searchInput}`;
} else if (searchEngine.includes('sogou')) {
  result = `${searchEngine}?query=${searchInput}`;
} else if (searchEngine.includes('weibo')) {
  result = `${searchEngine}?q=${searchInput}`;
} else if (searchEngine.includes('tiktok')) {
  result = `${searchEngine}/${searchInput}`;
} else if (searchEngine.includes('bilibili')) {
  result = `${searchEngine}?keyword=${searchInput}`;
} else if (searchEngine.includes('xiaohongshu')) {
  result = `${searchEngine}?keyword=${searchInput}`;
} else if (searchEngine.includes('douyin')) {
  result = `${searchEngine}/${searchInput}`;
} else if (searchEngine.includes('bing')) {
  result = `${searchEngine}?q=${searchInput}`;
  }

  // window.location.href = result; // 跳转到搜索结果页
  window.open(result,'_blank');  //从新的页面打开
});

// 广告
function show_ad() {
  var ad = document.createElement("div");
  ad.innerHTML = "<img src='wxGZH.jpg' alt='Your ad' />";
  ad.style.position = "fixed";
  ad.style.top = "35%";
  ad.style.right = "40%";
  ad.style.zIndex = "9999";
  document.body.appendChild(ad);

  var cover = document.createElement("div");
  cover.style.position = "fixed";
  cover.style.top = "0";
  cover.style.left = "0";
  cover.style.width = "100%";
  cover.style.height = "100%";
  cover.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  cover.style.zIndex = "9998";
  document.body.appendChild(cover);
  cover.addEventListener("click", function() {
    document.body.removeChild(ad);
    document.body.removeChild(cover);
  });
}

var weixinLink = document.getElementById("weixin");
weixinLink.addEventListener("click", function() {
  show_ad();
});
