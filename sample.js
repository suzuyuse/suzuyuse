$(function(){
    $("#page-top a").click(function(){
        $('html,body').animate({scrollTop:0},1000);
        return false;
    });
});

function fncBMI(){
    var bmi,w,h //bmi,体重,身長
    w= eval(document.bmi.bmiWeight.value);
    h= eval(document.bmi.bmiHeight.value)/100; //mに換算
    bmi= w/(h*h);
    alert('あなたのBMI値は' +bmi+ 'です。');
    document.bmi.bmiAns.value=bmi;
}