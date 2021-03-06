(function(){

function scaledownslideTB(currentEle, nextEle, dir, callback) {
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

    var outClass = 'pt-page-scaleDown', 
        inClass = 'pt-page-moveFromBottom pt-page-ontop'
        ;

    if(2 == dir){
        outClass = 'pt-page-scaleDown'; 
        inClass = 'pt-page-moveFromTop pt-page-ontop';
    }

    Animation.pageTransition(nextEle, currentEle, inClass, outClass);

};

Animation.register('scaledownslideTB', scaledownslideTB);

})();

