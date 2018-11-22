var word_array = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg',
    'images/10.jpg',
    'images/11.jpg',
    'images/12.jpg',
    'images/13.jpg',
    'images/14.jpg',
    'images/15.jpg',
    'images/16.jpg',
    'images/17.jpg',
    'images/18.jpg',
    'images/19.jpg',
    'images/20.jpg',
    'images/21.jpg',
    'images/22.jpg',
    'images/23.jpg',
    'images/24.jpg'
];
var usedImages = {};
var usedImagesCount = 0;
var exec = false;
var exec2 = false;
var exec3 = false;
var exec4 = false;
var exec5 = false;
var exec6 = false;
var exec7 = false;
var exec8 = false;
var exec9 = false;
var exec10 = false;
var exec11 = false;
var exec12 = false;
var exec13 = false;
var exec14 = false;
var exec15 = false;
var exec16 = false;
var exec17 = false;
var exec18 = false;
var exec19 = false;
var exec20 = false;
var exec21 = false;
var exec22 = false;
var exec23 = false;
var exec24 = false;

var usedform = false;
var usedform2 = false;
var usedform3 = false;
//Массив ссылок на картиноки


function getImg() {

    if (exec == true) {return;}
    var randomNum = Math.floor(Math.random() * (word_array.length - 1));
    if (!usedImages[randomNum]) {
        document.getElementById("result").innerHTML = '<img src="' + word_array[randomNum] + '" >';
        usedImages[randomNum] = true;
        usedImagesCount++;

        exec = true;
        if (usedImagesCount === word_array.length - 1) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg();



    }



}

function getImg2() {

    if (usedform2 == true){getImg()}
    if (exec2 == true){return;}
    var randomNum = Math.floor(Math.random() * (word_array.length - 1));
    if (!usedImages[randomNum]) {
        document.getElementById("result2").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        usedform2 = true;
        exec2 = true;

        if (usedImagesCount === word_array.length - 1) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg2();
    }
}
function getImg3() {
    if (usedform == true){getImg2()}
    if (exec3 == true){return;}
    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result3").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        usedform = true;
        exec3 = true;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg3();
    }

}
function getImg4() {

    if (exec4 == true){return;}
    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result4").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        exec4 = true;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg4();
    }

}
function getImg5() {

    if (exec5 == true){return;}
    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result5").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        exec5 = true;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg5();
    }


}
function getImg6() {

    if (exec6 == true){return;}
    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result6").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        exec6 = true;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg6();
    }
}
function getImg7() {

    if (exec7 == true){return;}
    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result7").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        exec7 = true;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg7();
    }

}
function getImg8() {

    if (exec8 == true){return;}
    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result8").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        exec8 = true;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg8();
    }

}

function getImg9() {

    if (exec9 == true){return;}
    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result9").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        exec9 = true;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg9();
    }


}
function getImg10() {

    if (exec10 == true){return;}
    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result10").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        exec10 = true;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg10();
    }
}
function getImg11() {

    if (exec11 == true){return;}
    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result11").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        exec11 = true;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg11();
    }

}
function getImg12() {

    if (exec12 == true){return;}
    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result12").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        exec12 = true;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg12();
    }

}
function getImg13() {

    if (exec13 == true){return;}
    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result13").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        exec13 = true;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg13();
    }


}
function getImg14() {

    if (exec14 == true){return;}
    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result14").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        exec14 = true;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg14();
    }
}
function getImg15() {

    if (exec15 == true){return;}
    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result15").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        exec15 = true;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg15();
    }

}
function getImg16() {

    if (exec16 == true){return;}
    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result16").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        exec16 = true;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg16();
    }

}

function getImg17() {

    if (exec17 == true){return;}
    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result17").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        exec17 = true;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg17();
    }


}
function getImg18() {

    if (exec18 == true){return;}
    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result18").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        exec18 = true;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg18();
    }
}
function getImg19() {

    if (exec19 == true){return;}
    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result19").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        exec19 = true;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg19();
    }

}
function getImg20() {

    if (exec20 == true){return;}
    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result20").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        exec20 = true;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg20();
    }

}
function getImg21() {

    if (exec21 == true){return;}
    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result21").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        exec21 = true;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg21();
    }


}
function getImg22() {

    if (exec22 == true){return;}
    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result22").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        exec22 = true;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg22();
    }
}
function getImg23() {

    if (exec23 == true){return;}
    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result23").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        exec23 = true;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg23();
    }

}
function getImg24() {

    if (exec24 == true){return;}
    var randomNum = Math.floor(Math.random() * (word_array.length));
    if (!usedImages[randomNum]) {
        document.getElementById("result24").innerHTML = '<img src="' + word_array[randomNum] + '">';
        usedImages[randomNum] = true;
        usedImagesCount++;
        exec24 = true;
        if (usedImagesCount === word_array.length) {
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        getImg24();
    }

}