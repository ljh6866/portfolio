$(function() {
    var aside = $('aside');
    var btn = aside.find('.btn');

    btn.on('click', function() {
        aside.toggleClass('on'); //css에서 만들어진 on이 아니라 함수를 실행시키기 위한 판별용으로 on클래스를 붙임. 

        if (aside.hasClass('on')) {//aside에 on클래스가 있는지 확인
                aside.animate({left: 0}); 
                btn.find('img').attr({
                    src: 'img/btn_close.png',
                    alt: '메뉴닫기'
                });
            }  else {
                aside.animate({left: '-50%'});
                btn.find('img').attr({
                    src: 'img/btn_open.png',
                alt: '메뉴열기' 
                })
            }
        });
    });