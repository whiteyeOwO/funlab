
import "./GoTop.css"; // 引入CSS檔案

window.onscroll = scrollFunction; //每當畫面捲動觸發一次

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
    
}//網頁捲動超過300pixel就會跑出來 display設定成block 跑回上面就隱藏。

// 重置scrollTop這個變數的值
function GoTopFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
export default GoTopFunction

