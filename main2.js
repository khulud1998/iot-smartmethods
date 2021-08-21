var slider1 = document.getElementById("S1");
var output1 = document.getElementById("Value1");

var slider2 = document.getElementById("S2");
var output2 = document.getElementById("Value2");

var slider3 = document.getElementById("S3");
var output3 = document.getElementById("Value3");

var slider4 = document.getElementById("S4");
var output4 = document.getElementById("Value4");

var slider5 = document.getElementById("S5");
var output5 = document.getElementById("Value5");

var slider6 = document.getElementById("S6");
var output6 = document.getElementById("Value6");

output1.innerHTML = slider1.value;

slider1.oninput =function(){
    output1.innerHTML = this.value;
}

output2.innerHTML = slider2.value;

slider2.oninput =function(){
    output2.innerHTML = this.value;
}

output3.innerHTML = slider3.value;

slider3.oninput =function(){
    output3.innerHTML = this.value;
}

output4.innerHTML = slider4.value;

slider4.oninput =function(){
    output4.innerHTML = this.value;
}

output5.innerHTML = slider5.value;

slider5.oninput =function(){
    output5.innerHTML = this.value;
}

output6.innerHTML = slider6.value;

slider6.oninput =function(){
    output6.innerHTML = this.value;
}


slider1.addEventListener("mousemove", function(){
    var x = slider1.value*100/180;
    var color = 'linear-gradient(90deg, rgb(219, 123, 59)'+ x +'%, rgb(107, 107, 98)'+ x +'%)';
    slider1.style.background =color;
})

slider2.addEventListener("mousemove", function(){
    var x = slider2.value*100/180;
    var color = 'linear-gradient(90deg, rgb(219, 123, 59)'+ x +'%, rgb(107, 107, 98)'+ x +'%)';
    slider2.style.background =color;
})

slider3.addEventListener("mousemove", function(){
    var x = slider3.value*100/180;
    var color = 'linear-gradient(90deg, rgb(219, 123, 59)'+ x +'%, rgb(107, 107, 98)'+ x +'%)';
    slider3.style.background =color;
})

slider4.addEventListener("mousemove", function(){
    var x = slider4.value*100/180;
    var color = 'linear-gradient(90deg, rgb(219, 123, 59)'+ x +'%, rgb(107, 107, 98)'+ x +'%)';
    slider4.style.background =color;
})

slider5.addEventListener("mousemove", function(){
    var x = slider5.value*100/180;
    var color = 'linear-gradient(90deg, rgb(219, 123, 59)'+ x +'%, rgb(107, 107, 98)'+ x +'%)';
    slider5.style.background =color;
})

slider6.addEventListener("mousemove", function(){
    var x = slider6.value*100/180;
    var color = 'linear-gradient(90deg, rgb(219, 123, 59)'+ x +'%, rgb(107, 107, 98)'+ x +'%)';
    slider6.style.background =color;
})
