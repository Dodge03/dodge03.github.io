// var navLinks = document.querySelectorAll('nav a');
// navLinks.forEach(function(link) {
//   link.addEventListener('click', function(event) {
//     event.preventDefault();
//     alert('这是' + link.textContent + '部分的内容');
//   });
// });



/*news*/
// 获取文章数据的网址
const url = "https://v1.hitokoto.cn";

// 获取 DOM 元素
const generateButton = document.getElementById("generate");
const outputDiv = document.getElementById("output");

// 点击按钮时触发文章生成器
generateButton.onclick = () => {
  // 发送 HTTP 请求获取文章数据
  fetch(`${url}/?c=b&encode=json`)
    .then(response => response.json())
    .then(data => {
      // 构建文章 HTML
      const articleHTML = `
        <div class="article">
          <h2>${data.hitokoto}</h2>
          <p>-- ${data.from_who ? data.from_who + '，' : ''}${data.from}</p>
        </div>
      `;
      
      // 在页面中输出文章 HTML
      outputDiv.innerHTML += articleHTML;
    })
    .catch(error => {
      console.log(error);
      outputDiv.innerHTML += "<p>出现错误，请稍后重试。</p>";
    });
};


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


//
// // 获取用户位置
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(position => {
//       const lat = position.coords.latitude;
//       const lng = position.coords.longitude;
      
//       getWeather(lat, lng);
//     });
//   } else {
//     console.log('Geolocation is not supported by this browser.');
//   }
// }
// getLocation();


//  // 拦截表单提交事件
//  document.getElementById("search-form").addEventListener("submit", function(event) {
//   // 阻止表单默认提交事件
//   event.preventDefault();

//   // 获取搜索引擎地址和搜索关键词
//   var engine = document.getElementById("engine-select").value;
//   var keyword = document.getElementById("search-input").value;

//   // 构造请求 URL
//   var url = engine + "?wd=" + encodeURIComponent(keyword);

//   // 发送 AJAX 请求
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       if (xhr.status === 200) {
//         // 将结果展示在页面上
//         document.getElementById("result").innerHTML = xhr.responseText;
//       } else {
//         // 处理错误
//         console.error("请求失败，返回码：" + xhr.status);
//       }
//     }
//   };
//   xhr.open("GET", url);
//   xhr.send();
// });

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

// // 音乐播放器
// var songs = [
//   { title: "红颜如霜", artist: "周杰伦", url: "音乐/song1.mp3" },
//   { title: "不值得", artist: "Artist 2", url: "音乐/song2.mp3" },
//   { title: "车站", artist: "IU", url: "音乐/song3.mp3" },
//   { title: "给我一首歌的时间 ", artist: "周杰伦", url: "音乐/song4.mp3" },
//   { title: "一分一秒", artist: "朴智妍", url: "音乐/song5.mp3" },
//   { title: "可爱女人", artist: "周杰伦", url: "音乐/song6.mp3" },
//   { title: "兰亭序", artist: "周杰伦", url: "音乐/song7.mp3" },
//   { title: "七里香", artist: "周杰伦", url: "音乐/song8.mp3" },
//   { title: "晴天", artist: "周杰伦", url: "音乐/song9.mp3" },
//   { title: "手写的从前", artist: "周杰伦", url: "音乐/song10.mp3" },
//   // { title: "测试", artist: "Artist 2", url: "音乐/song11.mp3" },
//   // { title: "测试", artist: "Artist 2", url: "音乐/song11.mp3" },
//   // { title: "测试", artist: "Artist 2", url: "音乐/song11.mp3" },
//   // { title: "测试", artist: "Artist 2", url: "音乐/song11.mp3" },
//   // 其他歌曲信息
// ];
// var audioContainer = document.getElementById("audio-container");
// var audioPlayers = []; // 存储所有的 `audio` 元素
// var currentSongIndex = 0; // 当前歌曲的索引
// var progressBar = document.getElementById("progress-bar");
// // 循环创建 `audio` 元素和控制器元素
// for (var i = 0; i < songs.length; i++) {
//   var song = songs[i];
//   // 创建 `audio` 元素
//   var audioPlayer = document.createElement("audio");
//   audioPlayer.src = song.url;
//   audioPlayer.id = "audio-player-" + (i + 1);
//   audioPlayers.push(audioPlayer); // 将 `audio` 元素添加到数组中
//   // 创建选项卡并将其添加到 `select` 元素中
//   var option = document.createElement("option");
//   option.value = i;
//   option.text = song.title + " - " + song.artist;
//   document.getElementById("song-selector").appendChild(option);
//   // 创建控制器元素
//   var playButton = document.createElement("button");
//   playButton.id = "play-button-" + (i + 1);
//   // 添加其它控制器元素
//   // 将 `audio` 元素和控制器元素添加到容器中
//   // audioContainer.appendChild(audioPlayer);
//   // audioContainer.appendChild(playButton);
//   // 添加其它控制器元素到容器中

//   // 添加事件监听器
//   audioPlayer.addEventListener("timeupdate", function() {
//     // 更新进度条
//     var percent = (this.currentTime / this.duration) * 100;
//     progressBar.value = percent;
//   });
//   playButton.addEventListener("click", function() {
//     if (audioPlayer.paused) {
//       audioPlayer.play();
//     } else {
//       audioPlayer.pause();
//     }
//   });
//   // 添加其它事件监听器
// }
// // 播放下一首歌曲
// function playNextSong() {
//   currentSongIndex++;
//   if (currentSongIndex >= audioPlayers.length) {
//     currentSongIndex = 0;
//   }
//   playCurrentSong();
// }
// // 播放上一首歌曲
// function playPrevSong() {
//   currentSongIndex--;
//   if (currentSongIndex < 0) {
//     currentSongIndex = audioPlayers.length - 1;
//   }
//   playCurrentSong();
// }
// // 播放当前选定的歌曲
// function playCurrentSong() {
//   for (var i = 0; i < audioPlayers.length; i++) {
//     var audioPlayer = audioPlayers[i];
//     if (i === currentSongIndex) {
//       audioPlayer.play();
//     } else {
//       audioPlayer.pause();
//       audioPlayer.currentTime = 0;
//     }
//   //   // 设置 ended 事件监听器
//   // audioPlayer.addEventListener("ended", function() {
//   //   // 获取下一首即将播放的歌曲索引
//   //   currentSongIndex++;
//   //   audioPlayers[currentSongIndex].play()   
//   // });

//   // 更新选项卡
//   document.getElementById("song-selector").value = currentSongIndex;
//   }
// }
// // 添加事件监听器
// document.getElementById("play-button").addEventListener("click", function() {
//   playCurrentSong();
// });
// document.getElementById("pause-button").addEventListener("click", function() {
//   for (var i = 0; i < audioPlayers.length; i++) {
//     var audioPlayer = audioPlayers[i];
//     audioPlayer.pause();
//   }
// });
// document.getElementById("next-button").addEventListener("click", function() {
//   playNextSong();
// });
// document.getElementById("prev-button").addEventListener("click", function() {
//   playPrevSong();
// });
// document.getElementById("song-selector").addEventListener("change", function() {
//   currentSongIndex = parseInt(this.value);
//   playCurrentSong();
// });

// let volumeSlider = document.getElementById("volume-slider");

// volumeSlider.addEventListener("input", function() {
//   audioPlayer.volume = volumeSlider.value / 100;
// });

// 监听音频播放完成事件（下一首）
// audioPlayer.addEventListener('ended', function() {
//   playNextSong();});

//音乐播放器2.0
let audio = document.getElementById("my-audio");
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");
let songSelect = document.getElementById("song-select");

// 定义列表中的歌曲
let songs = [];
let numSongs = 10; // 可以改变这个变量来指定文件名的数量
for (let i = 1; i <= numSongs; i++) {
  songs.push(`音乐/song${i}.mp3`);
}
console.log(songs);
let currentSongIndex = 0; // 当前播放的歌曲在 `songs` 列表中的序号
  // // 创建选项卡并将其添加到 `select` 元素中
  // var option = document.createElement("option");
  // option.value = i;
  // option.text = audio.title + " - " + audio.artist;
  // document.getElementById("song-selector").appendChild(option);

// 播放当前选定的歌曲
function playSelectedSong() {
  let selectedIndex = songSelect.selectedIndex;
  audio.src = "音乐/" + songSelect.options[selectedIndex].value;
  audio.play();
  //   // 更新选项卡
  document.getElementById("song-selector").value = currentSongIndex;
}

// 播放下一首歌曲
function playNextSong() {
  currentSongIndex++;
  if (currentSongIndex >= songs.length) {
    currentSongIndex = 0;
  }
  audio.src = songs[currentSongIndex];
  audio.play();
  //   // 更新选项卡
  // document.getElementById("song-selector").value = currentSongIndex;
}

// 播放上一首歌曲
function playPrevSong() {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = songs.length - 1;
  }
  audio.src = songs[currentSongIndex];
  audio.play();
  //   // 更新选项卡
  // document.getElementById("song-selector").value = currentSongIndex;
}

// 监听音频播放结束事件
audio.addEventListener("ended", function () {
  playNextSong();
});

// 绑定按钮和选择器的事件监听器
prevBtn.addEventListener("click", playPrevSong);
nextBtn.addEventListener("click", playNextSong);
songSelect.addEventListener("change", playSelectedSong);



// // 加上时间显示
// const timeDisplay = document.createElement("span");
// timeDisplay.classList.add("time-display");
// progressBar.parentNode.insertBefore(timeDisplay, progressBar.nextSibling);


// audioPlayer.addEventListener("loadedmetadata", () => {
//   const duration2 = audioPlayer.duration;
//   timeDisplay.innerHTML = "00:00 / " + formatTime(duration2);
// });

// timeDisplay.innerHTML = formatTime(currentTime)+ " / " + formatTime(duration2);


// function formatTime(time) {
//   const minutes = Math.floor(time / 60);
//   const seconds = Math.floor(time % 60);
//   return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
// }

//
// const playButton = document.querySelector('#play-button');
// const pauseButton = document.querySelector('#pause-button');

// if (playButton.style.display !== 'none') {
//   playButton.style.display = 'none'; // 隐藏播放按钮
// }

// if (pauseButton.style.display !== 'block') {
//   pauseButton.style.display = 'block'; // 显示暂停按钮
// }
// const playButton = document.querySelector('#play-button');
// const pauseButton = document.querySelector('#pause-button');

// if (pauseButton.style.display !== 'none') {
//   pauseButton.style.display = 'none'; // 隐藏暂停按钮
// }

// if (playButton.style.display !== 'block') {
//   playButton.style.display = 'block'; // 显示播放按钮
// }
// let isPlaying = false; // 初始状态是暂停

// const playButton = document.querySelector('#play-button');
// const pauseButton = document.querySelector('#pause-button');

// function play() {
//   isPlaying = true;
//   updatePlayerState();
// }

// function pause() {
//   isPlaying = false;
//   updatePlayerState();
// }

// // 根据 isPlaying 变量更新按钮的状态
// function updatePlayerState() {
//   if (isPlaying) {
//     playButton.style.display = 'none'; // 隐藏播放按钮
//     pauseButton.style.display = 'block'; // 显示暂停按钮
//   } else {
//     pauseButton.style.display = 'none'; // 隐藏暂停按钮
//     playButton.style.display = 'block'; // 显示播放按钮
//   }
// }

//收起

// var toggleBtn = document.getElementById('toggle-btn');
// var linkContainer = document.querySelector('.link-container');
// var isCollapsed = false; // 标记列表是否已经收起

// toggleBtn.addEventListener('click', function() {
//   if (isCollapsed) {
//     // 如果列表已经收起，则展开列表
//     linkContainer.style.display = 'block';
//     toggleBtn.textContent = '收起';
//     isCollapsed = false;
//   } else {
//     // 否则隐藏列表
//     linkContainer.style.display = 'none';
//     toggleBtn.textContent = '展开';
//     isCollapsed = true;
//   }
// });

// 微信公账号
// var weixinLink = document.getElementById("weixin");
// weixinLink.addEventListener("click", function() {
//   // 弹出窗口
//   var popup = window.open("", "popup", "width=300,height=400");
//   // 在窗口中插入二维码图片
//   popup.document.write('<img src="wxGZH.jpg"/>');
// });


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


// function close_ad(){
//   var imageContainer = document.getElementById("weixin");
//   imageContainer.style.display = "none";
// }
// var imageContainer = document.getElementById("weixin")
// imageContainer.addEventListener("click", function(event) {
//   if (event.target === this) {
//     closeImage();
//   }
// })