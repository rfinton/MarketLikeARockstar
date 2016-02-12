function callc1(){
    var c1 = document.getElementById('c1');
    var deltax = 1;
    c1.style.left = '1024px';
    var shiftc1 = setInterval(function(){
        pos = parseInt(c1.style.left);
        pos -= deltax;
        c1.style.left = pos+'px';

        if(pos == 400){
            callc2();
        }

        if(pos == -800){
            clearInterval(shiftc1);
            c1.style.left = '1024px';
        }
    },25);
}

function callc2(){
    var c2 = document.getElementById('c2');
    var deltax = 1;
    c2.style.left = '1024px';
    var shiftc2 = setInterval(function(){
        pos = parseInt(c2.style.left);
        pos -= deltax;
        c2.style.left = pos+'px';

        if(pos == 800){
            callc3();
        }

        if(pos == -800){
            clearInterval(shiftc2);
            c2.style.left = '1024px';
        }
    },25);
}

function callc3(){
    var c3 = document.getElementById('c3');
    var deltax = 1;
    c3.style.left = '1024px';
    var shiftc3 = setInterval(function(){
        pos = parseInt(c3.style.left);
        pos -= deltax;
        c3.style.left = pos+'px';

        if(pos == 800){
            callc4();
        }

        if(pos == -800){
            clearInterval(shiftc3);
            c3.style.left = '1024px';
        }
    },25);
}

function callc4(){
    var c4 = document.getElementById('c4');
    var deltax = 1;
    c4.style.left = '1024px';
    var shiftc4 = setInterval(function(){
        pos = parseInt(c4.style.left);
        pos -= deltax;
        c4.style.left = pos+'px';

        if(pos == 600){
            callc5();
        }

        if(pos == -800){
            clearInterval(shiftc4);
            c4.style.left = '1024px';
        }
    },25);
}

function callc5(){
    var c5 = document.getElementById('c5');
    var deltax = 1;
    c5.style.left = '1024px';
    var shiftc5 = setInterval(function(){
        pos = parseInt(c5.style.left);
        pos -= deltax;
        c5.style.left = pos+'px';

        if(pos == 800){
            callc6();
        }

        if(pos == -800){
            clearInterval(shiftc5);
            c5.style.left = '1024px';
        }
    },25);
}

function callc6(){
    var c6 = document.getElementById('c6');
    var deltax = 1;
    c6.style.left = '1024px';
    var shiftc6 = setInterval(function(){
        pos = parseInt(c6.style.left);
        pos -= deltax;
        c6.style.left = pos+'px';

        if(pos == 800){
            callc1();
        }

        if(pos == -800){
            clearInterval(shiftc6);
            c6.style.left = '1024px';
        }
    },25);
}

callc1();