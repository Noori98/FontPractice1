const containerEl = document.querySelector(".container");

const hobbys = ["schwimmen", "kochen", "programmieren"];

let hobbyIndex = 0;
let characterIndex = 0;
let typing = true;



updateText();

function updateText() {
    let currentHobby = hobbys[hobbyIndex];
//hier wird buchstabe für buchstabe geschriebn 
    if (typing) {
        characterIndex++;//zeigt einen Buchstabe mehr
        containerEl.innerHTML = `<h1>Meine Hobbys sind ${currentHobby.slice(0, characterIndex)},</h1>`;
//schreiben fertig ist stop 1 s
        if (characterIndex === currentHobby.length) {
            typing = false;
            setTimeout(updateText, 1000);
            return;
        }
    } else {
        characterIndex--;
        containerEl.innerHTML = `<h1>Meine Hobbys sind ${currentHobby.slice(0, characterIndex)},</h1>`;

        if (characterIndex === 0) {
            typing = true;
            hobbyIndex++;
            if (hobbyIndex === hobbys.length) {
                hobbyIndex = 0;
            }
        }
    }

    setTimeout(updateText, typing ? 200 : 100); 
}
