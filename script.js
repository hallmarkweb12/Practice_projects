const text = "Web Developer | UI Designer";
let i = 0;
let el = document.querySelector(".typing");
function type(){
    if(!el) return;
    if(i<text.length){
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type,100);
    }
}
type();