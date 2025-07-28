const faqCard = document.querySelectorAll(".faq-card");

faqCard.forEach((item, index) => {
    let header = item.querySelector(".faq-title");
    header.addEventListener("click", () => {
        item.classList.toggle("open");
        let description = item.querySelector(".hide-show-section");
        let icon = item.querySelector(".icon");
        if (item.classList.contains("open")) {
            description.style.height = description.scrollHeight + "px";
            icon.src = "icons/icon-show-less.svg";
        } else {
            description.style.height = "0px"
            icon.src = "icons/icon-show-more.svg";
        }
        removeOpen(index);
    })
})

function removeOpen(index1){
    faqCard.forEach((item2, index2) => {
        if(index1 != index2) {
            item2.classList.remove("open");
            let des = item2.querySelector(".hide-show-section");
            let icn = item2.querySelector(".icon");
            des.style.height = "0px";
            icn.src = "icons/icon-show-more.svg";
        }
    })
}