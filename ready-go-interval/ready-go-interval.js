

var intervarl = setInterval(trafic, 3000);
var count = 0;
function trafic() {

    if (count == 0) {
        document.getElementById('img1').src = 'red.png';
        document.getElementById('img2').src = 'gray.png';
        document.getElementById('img3').src = 'gray.png';
        document.getElementsByClassName('message')[0].innerHTML = "<p>Ready</p>";
        document.getElementsByClassName('message')[0].style.color = 'red';
        count += 1;

    }
    else if (count == 1) {
        document.getElementById('img1').src = 'gray.png';
        document.getElementById('img2').src = 'green.png';
        document.getElementById('img3').src = 'gray.png';
        document.getElementsByClassName('message')[0].innerHTML = "<p>Steady</p>";
        document.getElementsByClassName('message')[0].style.color = 'green';
        count += 1;

    }
    else if (count == 2) {
        document.getElementById('img1').src = 'gray.png';
        document.getElementById('img2').src = 'gray.png';
        document.getElementById('img3').src = 'orange.png';
        document.getElementsByClassName('message')[0].innerHTML = "<p>Go</p>";
        document.getElementsByClassName('message')[0].style.color = 'orange';
        count = 0;

    }
    else {
        clearInterval(intervarl);
        count += 1;
    }
}

