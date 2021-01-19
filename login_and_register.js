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

function setFocus() {
    document.getElementById('myBtn').focus();
}