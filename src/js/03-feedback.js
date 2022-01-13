import throttle from "lodash.throttle";


const formRef = document.querySelector('form');
const inputMail = formRef.elements.email;
const textareaTxt = formRef.elements.message;

const locStorKey = 'feedback-form-state';
const storageObj = {
    email: '',
    message: '',
};
basicStorage();

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));

function basicStorage() {
    const currLocStorage = localStorage.getItem(locStorKey);

    const parsLocStorage = JSON.parse(currLocStorage);

    if (!parsLocStorage) {
        localStorage.setItem(locStorKey, JSON.stringify(storageObj));
    } else {
        populateEmail();
        populateTextarea();
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    if (inputMail.value === '' || textareaTxt.value === '') {
        window.alert('all fields must be completed!');
        return;
    }
    const sendData = localStorage.getItem(locStorKey);
    console.log(JSON.parse(sendData));
    event.currentTarget.reset();
    localStorage.removeItem(locStorKey);
}

function populateEmail() {
    const locStorCurr = localStorage.getItem(locStorKey);

    const parsLocStorCurr = JSON.parse(locStorCurr);

    if (parsLocStorCurr.email) {
        inputMail.value = parsLocStorCurr.email;
    }
}

function populateTextarea() {
    const locStorCurr = localStorage.getItem(locStorKey);
    const parsLocStorCurr = JSON.parse(locStorCurr);
    if (parsLocStorCurr.message) {
        textareaTxt.value = parsLocStorCurr.message;
    }
}

function onFormInput(event) {
    const formValue = event.target.value;

    const currLocStor = localStorage.getItem(locStorKey);

    const parsLocStor = JSON.parse(currLocStor);

    if (!parsLocStor) {
        localStorage.setItem(locStorKey, JSON.stringify(storageObj));

        const locStor = localStorage.getItem(locStorKey);
        const parsLocStor = JSON.parse(locStor);
        if (event.target.name === 'email') {
            parsLocStor.email = formValue;
        } else if (event.target.name === 'message') {
            parsLocStor.message = formValue;
        }
        localStorage.setItem(locStorKey, JSON.stringify(parsLocStor));
    } else {
        if (event.target.name === 'email') {
            parsLocStor.email = formValue;
        } else if (event.target.name === 'message') {
            parsLocStor.message = formValue;
        }
        localStorage.setItem(locStorKey, JSON.stringify(parsLocStor));
    }
}