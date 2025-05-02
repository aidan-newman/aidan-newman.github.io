console.log("Page loaded");

let clicked = 0;
let pos = 45;

function animVar(start, target, dur, updateFn) {
    const init = performance.now();

    function frame(curr) {
        const progress = Math.min((curr - init) / dur, 1);
        const value = start + (target - start) * progress;
        updateFn(value);
        if (progress < 1) {
            requestAnimationFrame(frame);
        }
    }
    requestAnimationFrame(frame);
}



document.addEventListener("DOMContentLoaded", () => {

    const pages = [...document.querySelectorAll(".pg-blk")];
    const main = document.querySelector("main");

    function selectPage(pages, i) {
        const main_rect = main.getBoundingClientRect();
            
        let target = (pages[i].getBoundingClientRect().left + pages[i].getBoundingClientRect().width/2) / main_rect.width * 100;
        
        animVar(pos, target, 150, x => {
            document.documentElement.style.setProperty("--hdr-base-ctr", x+"%");
        });
        pos = target;
    }



    for (let i = 0; i < pages.length; i++) {
        pages[i].addEventListener("click", () => {
            clicked = i;
            selectPage(pages, i);
        });
    }
    window.addEventListener("resize", () => {
        selectPage(pages, clicked);
    });
});