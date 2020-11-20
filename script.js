// function checkMobile() {
//     return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//    }

//    if (!checkMobile()) { // not mobile
//     $('.flipbook').turn('display', 'double');
//    }
//    else {
//     $('.flipbook').turn('display', 'single');
//    }

$(window).bind('keydown', function(e){

    if (e.target && e.target.tagName.toLowerCase()!='input')
        if (e.keyCode==37)
            $('.flipbook').turn('previous');
        else if (e.keyCode==39)
            $('.flipbook').turn('next');

});
    const first = $("#first")
    const back = $("#back")
    const next = $("#next")
    const last = $("#last")
    const page = $('.flipbook').children().length;


    $(first).click(()=>{
        $('.flipbook').turn("page",1)
    })
    
    $(back).click(()=>{
        $('.flipbook').turn("previous")
    })
    $(next).click(()=>{
        $('.flipbook').turn("next")
    })
    $(last).click(()=>{
        $('.flipbook').turn("page", page)
    })

// var firstBtn =  document.getElementsByName('first')

// firstBtn.addEventListener('click',function(){
//     $('.flipbook').turn('');
// });
// $(backBtn)
// var backBtn = document.getElementsByName('back')

// backBtn.addEventListener('click',function () {
//     $('.flipbook'),turn('previous');
// });

// var nextBtn = document.getElementsByName('next')

// nextBtn.addEventListener('clicl',function () {
//     $('.flipbook').turn('next')
// })

// var lastBtn = document.getElementsByName('last')

// lastBtn.addEventListener('click',function () {
//     $('.flipbook').turn('')
// })