console.log("Page loaded");

let selectedPage = 0;
let baseGradPos = 45;

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

    // once loaded functions
    function updateBaseGrad(pages, i) {
        const main_rect = main.getBoundingClientRect();
        
        let target = (pages[i].getBoundingClientRect().left + pages[i].getBoundingClientRect().width/2) / main_rect.width * 100;
        
        animVar(baseGradPos, target, 100, x => {
            document.documentElement.style.setProperty("--hdr-base-ctr", x+"%");
        });
        baseGradPos = target;
    }

    function selectPage(pages, i, moveBaseGrad) {
        if (moveBaseGrad) {
            updateBaseGrad(pages, i);
        }
        let hash = window.location.hash;
        hash = pages[i].getAttribute("data-dir");
    }

    function getPageIndex(pages, dir) {
        for (let i = 0; i < pages.length; i++) {
            if (pages[i].getAttribute("data-dir") == dir) return i;
        }
    }


    
    let hash = window.location.hash;
    console.log(hash);
    switch (hash) {
        case "":
            hash = "#/aboutme";
            break;
        case "#/":
            hash = "#/aboutme";
            break;
        case "#/aboutme":
            
            selectPage(pages, getPageIndex(pages, "#/aboutme"), 0);
            break;
        case "#/projects":
            selectPage(pages, getPageIndex(pages, "#/projects"), 0);
            break;
        case "#/resum%C3%A9":
            selectPage(pages, getPageIndex(pages, "#/resum%C3%A9"), 0);
            break;
    }

    // select a page 
    for (let i = 0; i < pages.length; i++) {
        pages[i].addEventListener("click", () => {
            selectedPage = i;
            selectPage(pages, i, 1);
        });
    }

    // dynamically update page select base gradient with window resizing 
    window.addEventListener("resize", () => {
        updateBaseGrad(pages, selectedPage);
    });
});