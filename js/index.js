
window.addEventListener("load", function(){

    const gap_divs = document.getElementsByClassName("gap_div");
    const pages = document.getElementsByClassName("header_page");
    let current = document.getElementById("startup");



    for (let i = 0; i < pages.length; i++) {

        if (pages[i] === current) {
            if (i>=0) {
                gap_divs[i-1].style.borderRadius = "0 0 10px 0";
            }
            if (i+1<gap_divs.length) {
                gap_divs[i].style.borderRadius = "0 0 0 10px";
            }
            pages[i].style.borderRadius = "10px 10px 0 0";
            pages[i].style.backgroundColor = "#ECF0F1";
        }

        pages[i].addEventListener("mouseover", function() {
            if(pages[i] === current) {return;}
            if (i>=0) {
                gap_divs[i-1].style.borderBottomRightRadius = "10px";
            }
            if (i+1<gap_divs.length) {
                gap_divs[i].style.borderBottomLeftRadius = "10px";
            }
        });
        pages[i].addEventListener("click", function() {
            console.log("click");
            current = pages[i];

            if (i>=0) {
                gap_divs[i-1].style.borderRadius = "0 0 10px 0";
            }
            if (i+1<gap_divs.length) {
                gap_divs[i].style.borderRadius = "0 0 0 10px";
            }
            pages[i].style.borderRadius = "10px 10px 0 0";
            pages[i].style.backgroundColor = "#ECF0F1";
        });

        pages[i].addEventListener("mouseleave", function() {
            if(pages[i] === current) {return;}
            if (i>=0) {
                gap_divs[i-1].style.borderBottomRightRadius = "0";
            }
            if (i+1<gap_divs.length) {
                gap_divs[i].style.borderBottomLeftRadius = "0";
            }
        });
    }
});