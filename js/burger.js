function humburger(){
    document.querySelector('#line1').classList.toggle("line_1");
    document.querySelector('#line2').classList.toggle("line_2");
    document.querySelector('#line3').classList.toggle("line_3");
    document.querySelector('#navi').classList.toggle("action");
}
document.querySelector("#burger").addEventListener('click' ,function(){
    humburger();
});

