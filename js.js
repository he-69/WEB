function current() {
    var mydate = new Date();
    var year = mydate.getFullYear();
    var month = mydate.getMonth() + 1;
    var date = mydate.getDate();
    var day = mydate.getDay();
    var week = ["日", "一", "二", "三", "四", "五", "六"];
    var hours = mydate.getHours();
    var minutes = mydate.getMinutes();
    var seconds = mydate.getSeconds();
    var str = "123";
    var str = year + "/" + change(month) + "/" + change(date) + "  星期" + week[day]
        + "  " + change(hours) + ":" + change(minutes) + ":" + change(seconds);
    if (hours <= 4) str += "   夜晚好";
    else if (hours <= 7) str += "   清晨好";
    else if (hours <= 11) str += "   上午好";
    else if (hours <= 14) str += "   中午好";
    else if (hours <= 17) str += "   下午好";
    else if (hours <= 24) str += "   晚上好";
    document.getElementById("currentTime").innerHTML = str;
}
setInterval(current, 500);
function change(data) {
    return data <= 9 ? "0" + data : data;
}

function js1() {
    var top_list = document.getElementById("top_list");
    var bottom = Array(5);
    for(var i = 1;i <= 4;i++) {
        bottom[i] = document.getElementById("header_bottom" + i);
        (function (i) {
            bottom[i].onclick = function () {
                    top_list.style.transform = ("translate(" + (-1220 * (i - 1)) + "px, 0)");
            }
        })(i);
    }
}

var precount2 = 1;
var count2 = 1;
var index = 0;
var time2 = 3500;
var Time2 = setInterval(lunbo2, time2);
function lunbo2() {
    var f = Array(7);
    var g = Array(7);
    var x = [0, 840, 600, 360, 840, 600, 360];
    var y = [0, 150, 150, 150, -150, -150, -150]
    for (var i = 1; i <= 6; i++) {
        f[i] = document.getElementById("f" + i);
        g[i] = document.getElementById("g" + i);
    }
    if(++count2 === 7) count2 = 1;
    g[precount2].style.zIndex = -1;
    g[precount2].style.boxShadow = "none";
    g[precount2].style.transform = "translate(0, 0) scale(1)";
    precount2 = count2;
    g[count2].style.zIndex = 999;
    g[count2].style.boxShadow = "0 0 5px 1px black";
    g[count2].style.transform = gettreanslate(x[count2], y[count2]);
    function gettreanslate(x, y) {
        return ("translate(" + x.toString() + "px, " + y.toString() + "px) scale(2.05)");
    }
}
function js2() {
    var f = Array(7);
    var g = Array(7);
    var x = [0, 840, 600, 360, 840, 600, 360];
    var y = [0, 150, 150, 150, -150, -150, -150]
    for (var i = 1; i <= 6; i++) {
        f[i] = document.getElementById("f" + i);
        g[i] = document.getElementById("g" + i);
    }
    for (var i = 1; i <= 6; i++) {
        (function (i) {
            f[i].onclick = function () {
                move(precount2);
                clearInterval(Time2);
                display(i);
                index = i;
            }
            f[i].onmouseout = function () {
                if(index == i) {
                    Time2 = setInterval(lunbo2, time2);
                    index = 10 + i;
                    precount2 = count2 = i;
                }
            }
            g[i].onmouseover = function () {
                if(index == 10 + i) {
                    clearInterval(Time2);
                }
            }
            g[i].onmouseout = function () {
                if(index == 10 + i) {
                    Time2 = setInterval(lunbo2, time2);
                }
            }
        })(i);
    }
    display(1);
    function move(pre) {
        g[pre].style.zIndex = -1;
        g[pre].style.boxShadow = "none";
        g[pre].style.transform = "translate(0, 0) scale(1)";
    }
    function display(now) {
        g[now].style.zIndex = 999;
        g[now].style.boxShadow = "0 0 5px 1px black";
        g[now].style.transform = gettreanslate(x[now], y[now]);
    }
    function gettreanslate(x, y) {
        return ("translate(" + x.toString() + "px, " + y.toString() + "px) scale(2.05)")
    }
}

function js3() {
    var top2_item = new Array(7);
    for (var i = 0; i <= 6; i++) {
        top2_item[i] = document.getElementById("top2_item" + i);
        (function (i) {
            top2_item[i].onmouseover = function () {
                top2_play(i);
            }
        })(i);
    }
    function top2_play(id) {
        for (var i = 0; i < id; i++) {
            top2_item[i].style.transformOrigin = "left";
            top2_item[i].style.transform = "translate(" + 100 * i + "px,0) rotateY(70deg)";
            top2_item[i].style.zIndex = i.toString();
        }
        for (var j = 6; j > id; j--) {
            top2_item[j].style.transformOrigin = "right";
            top2_item[j].style.transform = "translate(" + (760 - 100 * (6 - j)) + "px,0) rotateY(-70deg)";
            top2_item[j].style.zIndex = -j.toString();
        }
        top2_item[id].style.transform = "translate(" + (100 * id + 80) + "px,0) rotateY(0)";
        top2_item[id].style.zIndex = "999";
    }
    top2_play(3);
}

var precount4 = 1;
var count4 = 0;
var time4 = 2500;
var Time4 = setInterval(lunbo4, time4);
function lunbo4() {
    var top3_img = document.getElementById("top3_block");
    var top3 = Array(7);
    for (var i = 1; i <= 6; i++) {
        top3[i] = document.getElementById("top3_" + i);
    }
    if(++count4 == 7) count4 = 1;
    top3[precount4].className = "top3_false";
    top3[count4].className = "top3_true";
    top3_img.style.backgroundImage = "url(\"./images/a" + (20 + count4) + ".jpg\")";
    precount4 = count4;
}
function js4() {
    var top3_img = document.getElementById("top3_block");
    var top3 = Array(7);
    for (var i = 1; i <= 6; i++) {
        top3[i] = document.getElementById("top3_" + i);
        (function (i) {
            top3[i].onmouseover = function () {
                if (i === precount4) return;
                // reset4();
                clearInterval(Time4);
                top3[precount4].className = "top3_false";
                top3[i].className = "top3_true";
                top3_img.style.backgroundImage = "url(\"./images/a" + (20 + i) + ".jpg\")";
            }
            top3[i].onmouseout = function () {
                Time4 = setInterval(lunbo4, time4);
                precount4 = i;
                count4 = i;
            }
        })(i);
    }
}

var timer;
function goTop() {
    timer = setInterval("runToTop()", 1);
}
function runToTop() {
    var currentPosition = document.documentElement.scrollTop;
    currentPosition -= 10;
    if (currentPosition > 0) {
        window.scrollTo(0, currentPosition);
    } else {
        window.scrollTo(0, 0);
        clearInterval(timer);
    }
}
function toTop() {
    document.getElementById("to_header").onclick = function () {
        goTop();
    }
}