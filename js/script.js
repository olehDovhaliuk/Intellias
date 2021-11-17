const smoothScroll = () => {
    const anchorElems = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchorElems) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}

document.addEventListener("DOMContentLoaded", smoothScroll);

const renderProgress = () => {
    const skillListElemsArray = [...document.querySelectorAll(".form__skills")];
    skillListElemsArray.forEach(elem => {
        const liElemsArray = [...elem.querySelectorAll("li")];
        liElemsArray.forEach(li => {
            let number = li.children[0].children[1].innerText;
            const progressBar = document.createElement("div");
            const extraDiv = document.createElement("div");
            progressBar.style.width = `${parseInt(number)}%`;
            progressBar.style.height = "100%";
            progressBar.style.position = "relative";
            progressBar.style.zIndex = 5;
            extraDiv.classList.add("rendered__progress");
            progressBar.append(extraDiv);
            li.children[1].append(progressBar);
        })
    })
}

document.addEventListener("DOMContentLoaded", renderProgress);