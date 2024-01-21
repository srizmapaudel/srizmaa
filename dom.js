// Select the element with id 'test'
let elem = document.getElementById('test');

// Set the inner HTML and apply styles
elem.innerHTML = "Hello";
elem.style.fontSize = "25px";
elem.style.color = "red";
elem.style.fontFamily = "sans-serif"; // Corrected the typo
elem.style.textTransform = "uppercase";
elem.style.textDecoration = "underline";
elem.style.fontStyle = "italic";

// Create a new div element
let newElem = document.createElement('div');
newElem.innerText = "Hello child";
newElem.style.textDecoration = "none"; // Removed '!important'
newElem.style.fontStyle = "normal";
newElem.style.color = "green";
elem.appendChild(newElem);

// Target elements with class 'someClass'
let someElem = document.getElementsByClassName('someClass');

// Add a new class to the first element with class 'someClass'
someElem[0].classList.add('newClass');

// Loop through elements with class 'someClass' and update text content
let someElemArray = [...someElem];
someElemArray.forEach((item, index) => {
    switch (index) {
        case 0:
            item.innerText = "SRIZMA";
            break;
        case 1:
            item.innerText = "PAUDEL";
            break;
        default:
            item.innerText = "AAYENA";
    }
});

// Add event listeners to the button with id 'randomBtn'
let buttonElem = document.getElementById('randomBtn');
buttonElem.addEventListener('mouseenter', (event) => {
    buttonElem.innerText = "Hello Ram";
});
buttonElem.addEventListener('mouseout', (event) => {
    buttonElem.innerText = "Hello Shyam";
});
buttonElem.addEventListener('click', (event) => {
    alert("User clicked");
});

// Add event listener to the input element with id 'name'
let inputElem = document.getElementById('name');
inputElem.addEventListener('input', (event) => {
    let studentName = event.target.value;
    console.log(studentName);
});

// Add event listener to the button with id 'fly' (uncomment the code block)
// let shakeButton = document.getElementById('fly');
// shakeButton.addEventListener('mouseover', () => {
//     shakeButton.classList.add('shake');
// });
// shakeButton.addEventListener('mouseout', () => {
//     shakeButton.classList.remove('shake');
// });

// Back to top button logic
window.addEventListener('scroll', (event) => {
    let scrollElem = document.getElementById('scrollDiv');
    if (window.scrollY < 150) {
        scrollElem.style.visibility = "hidden";
    } else {
        scrollElem.style.visibility = "visible";
    }
});

// Add event listener to the button with id 'button2'
let button2 = document.getElementById('button2');
button2.addEventListener('click', (event) => {
    let divToScroll = document.getElementById('div2');
    divToScroll.scrollIntoView();
});

// Get battery information
window.navigator.getBattery().then(battery => {
    let percentElem = document.getElementById('chargingPercentage');
    let batteryImg = document.querySelector('#chargingInformation img');

    percentElem.innerText = `${(battery.level * 100).toFixed(2)}%`;

    if (battery.charging) {
        batteryImg.src = "./charging.gif";
    } else {
        batteryImg.src = "./discharging.gif";
    }

    battery.onchargingchange = (data) => {
        console.log(data);
        if (data.target.charging) {
            batteryImg.src = "./charging.gif";
        } else {
            batteryImg.src = "./discharging.gif";
        }
    };

    battery.onlevelchange = (newLevel) => {
        console.log(newLevel);
        percentElem.innerText = `${(newLevel.target.level * 100).toFixed(2)}%`;
    };
});

// Corrected the function syntax
const changeUrl = () => {
    window.location.href = "https://www.google.com";
};

// Removed the duplicated goBack function
const goBack = () => {
    window.history.back();
};

// Added a missing function declaration for handleAudioVideo
const handleAudioVideo = () => {
    window.navigator.getUserMedia(
        { audio: true, video: true },
        (stream) => {
            let videoElem = document.getElementById("video");
            videoElem.srcObject = stream;
        },
        (error) => {
            console.log('Permission denied or error accessing audio/video devices');
        }
    );
};
constfetchSomething1=()=>{
    new Promise((resolve,reject)=>{//method vayesi small bracket aaucha (method comes from object...its dependent)
        fetch('')
        .then(res=>{resolve(res)})
        .catch(err=>{reject(err)})

    })
    newPromise1((resolve,reject))=>{
        fetch('')
        .then(res=>{resolve(res)})
        .catch(err=>{reject(err)})
    }
    

}
