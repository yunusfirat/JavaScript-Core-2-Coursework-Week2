const blueBtn = document.querySelector('#blueBtn');
const orangeBtn = document.querySelector('#orangeBtn');
const greenBtn = document.querySelector('#greenBtn');

const jumbotron = document.querySelector('.jumbotron');
const donateBike = document.querySelector('#donate');
const volunteer = document.querySelector('#volunteer');




blueBtn.addEventListener('click', () => {
    jumbotron.style.backgroundColor = "#588fbd";
    donateBike.style.backgroundColor = "#ffa500";
    volunteer.style.backgroundColor = "black";
    volunteer.style.color = "white";
});

orangeBtn.addEventListener('click', () => {
    jumbotron.style.backgroundColor = "#f0ad4e";
    donateBike.style.backgroundColor = "#5751fd";
    volunteer.style.backgroundColor = "31b0d5";
    volunteer.style.color = "white";

});

greenBtn.addEventListener('click', () => {
    jumbotron.style.backgroundColor = "#87ca8a";
    donateBike.style.backgroundColor = "black";
    volunteer.style.backgroundColor = "#8c9c08";
});

const submit = document.querySelector('#submit');
submit.addEventListener('click', (event) => {
    event.preventDefault();
    const filled = true;
    const describe = document.querySelector('#exampleTextarea');
    const yourname = document.querySelector('#example-text-input');
    const email = document.querySelector('#exampleInputEmail1');
    const emailvalue = email.value;
    console.log(emailvalue);
    if (!yourname.value) {
        yourname.style.backgroundColor = "red";
        filled = false;
    } else {
        yourname.style.backgroundColor = "transparent";
    }
    if (!describe.value) {
        describe.style.backgroundColor = "red";
        filled = false;
    } else {
        describe.style.backgroundColor = "transparent";
    }

    if (!emailvalue.includes('@')) {
        email.style.backgroundColor = "red";
        filled = false;
    } else {
        email.style.backgroundColor = "transparent";
    }

    if (filled) {
        alert("Thank you for filling out the form.")
        yourname.value = "";
        email.value = "";
        describe.value = "";
        yourname.style.backgroundColor = "yellow";
        email.style.backgroundColor = "transparent";
        describe.style.backgroundColor = "transparent";
    }

});