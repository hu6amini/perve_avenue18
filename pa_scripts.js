//Reply Counter
document.addEventListener("DOMContentLoaded",(function(){!function processPostElements(){const e=document.querySelectorAll(".post"),t=function getPageNumber(){const e=new URLSearchParams(window.location.search);return parseInt(e.get("st")||0)+1}();e.forEach(((e,n)=>{!function createReplyCounter(e,t,n){const o=document.createElement("b");o.className="reply_counter",o.textContent="#"+t;const r=e.querySelector(".mini_buttons.rt.Sub");r&&("after"===n?r.appendChild(o):r.insertBefore(o,r.firstChild))}(e,t+n,"after")}))}()}));
//Favicons
(function waitForElements() {
    const colorLinks = document.querySelectorAll(".color a");
    const tmsgLinks = document.querySelectorAll("span.tmsg a");
    if (colorLinks.length > 0 || tmsgLinks.length > 0) {
        updateFaviconsForLinks(colorLinks);
        updateFaviconsForLinks(tmsgLinks);
    } else {
        setTimeout(waitForElements, 100); // Check again in 100 milliseconds
    }
})();

function updateFaviconsForLinks(links) {
    links.forEach((link) => {
        if (!(link.closest(".spoiler .code_top a") || link.closest(".fancyborder a") || link.closest(".quote_top a") || link.querySelector("img"))) {
            let img = document.createElement("img");
            if (link.href.includes("youtu.be")) {
                img.src = "https://www.google.com/s2/favicons?domain=youtube.com";
            } else {
                img.src = "https://www.google.com/s2/favicons?domain=" + link.href;
            }
            img.alt = "fav";
            if (link.matches(".quote a, .tmsg a")) {
                img.width = 14;
                img.height = 14;
            } else {
                img.width = 16;
                img.height = 16;
            }
            link.prepend(img);
        }
    });
}

const favicon = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        updateFaviconsForLinks(mutation.target.querySelectorAll(".color a, span.tmsg a"));
    });
});

const body = document.querySelector("body");
favicon.observe(body, { childList: true, subtree: true });

updateFaviconsForLinks(document.querySelectorAll(".color a, span.tmsg a"));

//Quote
document.addEventListener("DOMContentLoaded",(()=>{function expandQuotes(e){const updateHeight=()=>{const t=e.querySelector(".quotebtn button");if(!t&&e.scrollHeight>170){e.style.maxHeight="170px";const t=document.createElement("div");t.className="quotebtn";const o=document.createElement("button");o.innerHTML="Show More...",t.appendChild(o),e.appendChild(t),o.addEventListener("click",(o=>{o.preventDefault(),o.stopPropagation(),e.style.transition="max-height 0.382s ease-in-out",e.style.maxHeight=e.scrollHeight+"px",t.style.display="none",setTimeout((()=>{e.style.maxHeight="none"}),382)}))}else t&&e.scrollHeight<=170&&t.parentNode.remove()};updateHeight();const t=new ResizeObserver(updateHeight);t.observe(e);const o=e.querySelector(".spoiler .code_top a");o&&o.addEventListener("click",(()=>{e.style.maxHeight="none",t.disconnect()}))}function modifyQuoteTop(e){const t=e.textContent,o=e.querySelector("a");if(t.includes("@")){const n=t.replace(/QUOTE\s*\(([^@]+)@[^)]+\)\s*/,"$1 said:");e.innerHTML=n,e.style.color="var(--mdcol)",o&&(e.appendChild(o),o.style.color="var(--mdcol)")}else{const t=e.querySelector(".quote_top b");t&&(t.style.opacity=1)}}(function initializeExpandQuotes(){document.querySelectorAll(".quote").forEach(expandQuotes),new MutationObserver((e=>{for(const t of e)t.addedNodes.length>0&&t.addedNodes.forEach((e=>{e.nodeType===Node.ELEMENT_NODE&&(e.classList.contains("quote")?expandQuotes(e):e.querySelectorAll(".quote").forEach(expandQuotes))}))})).observe(document.body,{childList:!0,subtree:!0})})(),document.querySelectorAll(".quote_top").forEach(modifyQuoteTop),function observeMutations(){new MutationObserver((e=>{for(const t of e)"childList"===t.type&&t.addedNodes.forEach((e=>{e.nodeType===Node.ELEMENT_NODE&&e.querySelectorAll(".quote_top").forEach(modifyQuoteTop)}))})).observe(document.body,{childList:!0,subtree:!0})}()}));
//Textarea Autogrow
function resizeTextarea(e){function updateTextareaHeight(){e.style.height="0",e.style.height=e.scrollHeight+"px",e.style.maxHeight="655px"}e&&(updateTextareaHeight(),e.addEventListener("input",updateTextareaHeight),window.addEventListener("load",updateTextareaHeight),e.addEventListener("paste",(()=>{setTimeout(updateTextareaHeight,0)})))}!function waitForElement(){const e=document.querySelector("textarea#Post");e?resizeTextarea(e):setTimeout(waitForElement,100)}();
//Goto
document.addEventListener("DOMContentLoaded",(function(){let e;function scrollToSmooth(e){window.scrollTo({top:e,behavior:"smooth",duration:600})}function showGotoElement(e){e.classList.add("active"),e.style.zIndex="9999"}function hideGotoElement(e){e.classList.remove("active")}!function initSmoothScrolling(){document.querySelector(".p_up").addEventListener("click",(()=>{scrollToSmooth(0)})),document.querySelector(".p_down").addEventListener("click",(()=>{scrollToSmooth(document.body.scrollHeight)}));const o=document.querySelector(".goto");window.addEventListener("scroll",(()=>{clearTimeout(e),showGotoElement(o),e=setTimeout((()=>{hideGotoElement(o)}),3e3)})),o.addEventListener("mouseenter",(()=>{clearTimeout(e),showGotoElement(o)})),o.addEventListener("mouseleave",(()=>{e=setTimeout((()=>{hideGotoElement(o)}),3e3)}))}()}));
//Preview
document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".send").forEach((function(e){var n=e.querySelectorAll("ul li.Item");if(n.length>=2){var t=document.getElementById("loading");t&&n[1].appendChild(t)}}))}));
