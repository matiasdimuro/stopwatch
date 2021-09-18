const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const clear = document.querySelector('#clear');
const time = document.querySelector('#time');

const milsec = document.querySelector('#milsec');
const sec = document.querySelector('#sec');
const min = document.querySelector('#min');

let ms = 0, s = 0, m = 0, pause = false;
let milisegundos = ms, segundos = s, minutos = s;

const startTime = () => {

    pause = false;
    const id = setInterval(run, 10);
    
    function run () {
        
        if((m == 60 && s == 0 && ms == 0) || pause == true) clearInterval(id);

        else {
            ms += 1;

            if(ms < 100) {

                if (ms.toString().length == 1) milsec.innerHTML = "0" + ms;
                else milsec.innerHTML = ms;

            } else {
    
                ms = 0;
                s += 1;
    
                if(s < 60) {
    
                    if(s.toString().length == 1) sec.innerHTML = "0" + s + "  .";
                    else sec.innerHTML = s + ".";
                    
                } else {
    
                    s = 0;
                    m += 1;
    
                    if(m.toString().length == 1) min.innerHTML = "0" + m + "  :  ";
                    else min.innerHTML = m + ":";
    
                }
    
            }
            // time.innerHTML = `${minutos} : ${segundos}.${milisegundos}`;
        }
    
    }
}

function stopTime() { 
    pause = true;
}

const clearTime = () => {
    min.innerHTML = "00:", sec.innerHTML = "00.", milsec.innerHTML = "00";
    m = 0, s = 0, ms = 0;
};