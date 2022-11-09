let ul = document.querySelector("ul")
let container = document.querySelector(".container")
let next = document.querySelector(".next")
let back = document.querySelector(".next")
let li = document.querySelectorAll(".container img")

ul.style.marginLeft="0px"

let i = 0
li.forEach(it => {
    it.setAttribute("id", i++)
    it.style.backgroundImage=`url(https://en.js.cx/carousel/${i}.png)`
});

let pressed=false
let X=0
let marginLeft=0

let ar
let timer =setInterval((e)=>{console.log(ar);},500)
for (const it of li) {
    it.ondragstart = function() {
        return false;
      };
}
container.addEventListener('mousedown', (e) => {
    pressed=true;
    X=e.x;
    marginLeft=parseInt(ul.style.marginLeft)
    e.stopImmediatePropagation()
})
document.addEventListener('mouseup', (e) => {
    pressed=false;
})
document.addEventListener('mousemove', (e) => {
    if(pressed && marginLeft + e.x - X >-130*7 && marginLeft + e.x - X <0){
       ul.style.marginLeft = marginLeft+e.x-X+"px"
    }
})

