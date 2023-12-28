
// Scroll
function scrollToContact() {
    var contactSection = document.getElementById('contactSection');
    var formSection = document.getElementById('formSection');

    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var targetSection = screenWidth < 1200 ? formSection : contactSection;

    targetSection.scrollIntoView({ behavior: 'smooth' });
}



// Cookies
const firstText = document.querySelector("#fullName");
const lastText = document.querySelector("#email");
const subjectText = document.querySelector("#subject");

const MfirstText = document.querySelector("#modalFullName");
const MlastText = document.querySelector("#modalEmail");
const MsubjectText = document.querySelector("#modalSubject");

const submitBtn = document.querySelector("#submitBtn");
const closeModalBtn = document.querySelector("#close-modal");
const modal = document.getElementById('myModal');


submitBtn.addEventListener("click", () => {
    const fullName = getCookieAndSetInput("fullName", "modalFullName");
    const email = getCookieAndSetInput("email", "modalEmail");
    const subject = getCookieAndSetInput("subject", "modalSubject");

    setCookie("fullName", firstText.value, 365);
    setCookie("email", lastText.value, 365);
    setCookie("subject", subjectText.value, 365);

    modal.querySelector(".modal_text").textContent = "Thanks for registration! Previous user data:";
});

function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookieAndSetInput(name, inputElementId) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element => {
        if (element.indexOf(name) === 0) {
            result = element.substring(name.length + 1);
        }
    });

    const inputElement = document.querySelector(`#${inputElementId}`);
    if (inputElement) {
        inputElement.value = result || '';
    }
    
    return result;
}



// Modal
submitBtn.addEventListener("click", () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});