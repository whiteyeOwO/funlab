
import "./GoTop.css";

// 改为普通函数
export function scrollFunction() {
    const myBtn = document.getElementById("myBtn");
    if (!myBtn) return;
    
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
}

export function GoTopFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export default GoTopFunction;
