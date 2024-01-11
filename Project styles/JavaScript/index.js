DisableDevtool();
var dv = document.getElementById("dv");
var btu = document.getElementById("btu");
var btu1 = document.getElementById("btu1");
var btu2 = document.getElementById("btu2");
var newInput = document.querySelector(".newInput");
var ula = document.createElement("ul");
dv.appendChild(ula);
var oLi = document.getElementsByTagName("li");
var arr = [
  "三餐秀",
  "煲仔饭",
  "猪脚饭",
  "剪花娘子",
  "嗨椒小面",
  "柒螺丝粉",
  "蒙自源",
  "竹升面",
  "潮汕粿条",
  "竹筒饭",
  "曾三仙",
  "霸碗盖饭",
  "肠粉",
  "黄焖鸡",
  "杀猪粉",
  "面子秦",
  "麻辣烫",
  "周螺丝粉",
];

var VIPNum = 100;
let VIP = ["三餐秀"];
for (var i = 0; i < arr.length; i++) {
  var liObj = document.createElement("li");
  liObj.innerText = arr[i];
  ula.appendChild(liObj);
}

var timer = null;
let peopleIndex = 0;
btu.onclick = function () {
  clearInterval(timer);
  timer = setInterval(function () {
    let loopArr = [];
    loopArr = arr;
    if (VIPNum > 0) {
      loopArr = arr.filter((item) => !VIP.includes(item));
    }
    var i = Math.floor(Math.random() * arr.length);
    peopleIndex = Math.floor(Math.random() * loopArr.length);
    resetClass();
    oLi[i].className = "change";
  }, 50);
};

btu1.onclick = function () {
  VIPNum -= 1;
  clearInterval(timer);
  var nameSpan = document.getElementsByClassName("name")[0];
  resetClass();
  oLi[peopleIndex].className = "change";
  nameSpan.innerText = arr[peopleIndex];
};

btu2.onclick = function () {
  var liObj = document.createElement("li");
  var newFood = prompt("请输入你想吃的食物？");
  liObj.innerText = newFood;
  arr.push(newFood);
  ula.appendChild(liObj);
};

function resetClass() {
  for (var j = 0; j < oLi.length; j++) {
    oLi[j].removeAttribute("class");
  }
}
