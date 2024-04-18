
let gap_divs;
let pages;
let current;


function highlightGaps(enter, i) {
    if (enter) { // mouse enter (highlight)
        if(pages[i] === current) {return;}
        if (i>=0) {
            gap_divs[i].style.borderBottomRightRadius = "10px";
        }
        if (i+1<gap_divs.length) {
            gap_divs[i+1].style.borderBottomLeftRadius = "10px";
        }
    } else { // mouse exit (unhighlight)

        if(pages[i] === current) {return;}
        if (i>=0) {
            gap_divs[i].style.borderBottomRightRadius = "0";
        }
        if (i+1<gap_divs.length) {
            gap_divs[i + 1].style.borderBottomLeftRadius = "0";
        }
    }
}

function main() {

    gap_divs = document.getElementsByClassName("gap_div");
    pages = document.getElementsByClassName("header_page");
    current = document.getElementById("startup");

    for (let i = 0; i < pages.length; i++) {

        if (pages[i] === current) {
            if (i>=0) {
                gap_divs[i].style.borderRadius = "0 0 10px 0";
            }
            if (i+1<gap_divs.length) {
                gap_divs[i+1].style.borderRadius = "0 0 0 10px";
            }
            pages[i].style.borderRadius = "10px 10px 0 0";
            pages[i].style.backgroundColor = "#ECF0F1";
        }

        pages[i].addEventListener("mouseover", function(){highlightGaps(true, i)});
        pages[i].addEventListener("mouseleave", function(){highlightGaps(false, i)});

        pages[i].addEventListener("click", function() {
            current = pages[i];

            if (i>=0) {
                gap_divs[i].style.borderRadius = "0 0 10px 0";
            }
            if (i+1<gap_divs.length) {
                gap_divs[i+1].style.borderRadius = "0 0 0 10px";
            }
            pages[i].style.borderRadius = "10px 10px 0 0";
            pages[i].style.backgroundColor = "#ECF0F1";
        });
    }
}

window.addEventListener("load", main);