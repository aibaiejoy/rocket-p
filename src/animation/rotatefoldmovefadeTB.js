(function(){

function rotatefoldmovefadeTB(currentEle, nextEle, dir, callback) {
    var $currentEle = currentEle && $(currentEle),
        $nextEle = nextEle && $(nextEle);

    if(0 == dir){
        if(currentEle != nextEle){
            currentEle && $currentEle.hide();
            setTimeout(function(){
                nextEle && $nextEle.show();
            }, 0);
        }

        callback && callback();
        return;
    }

    var outClass = 'pt-page-rotateFoldTop', 
        inClass = 'pt-page-moveFromBottomFade'
        ;

    if(2 == dir){
        outClass = 'pt-page-rotateFoldBottom'; 
        inClass = 'pt-page-moveFromTopFade';
    }

    Animation.pageTransition(nextEle, currentEle, inClass, outClass);

};

Animation.register('rotatefoldmovefadeTB', rotatefoldmovefadeTB);

})();


