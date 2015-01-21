define(function(require){

var undef = void 0;

var $ = require('zepto');
var SettingsUtilsInterface = require('settingsutilsinterface');

var BoxSettingsInterface = {

    _getPos: function(){
        var me = this, pos = {};
        $.extend(
            pos
            , me._getSettings('pos_left', 'left') 
            , me._getSettings('pos_top', 'top') 
            , me._getSettings('pos_right', 'right') 
            , me._getSettings('pos_bottom', 'bottom') 
        );

        return pos;
    }

    , _getSize: function(){
        var me = this, size = {};
        $.extend(
            size
            , me._getSettings('size_width', 'width') 
            , me._getSettings('size_height', 'height') 
        );

        return size;
    }

    , _getBoxAlign: function(){
        return this._getSettings('pos_boxalign', 'boxAlign');
    }




    , _setPos: function(pos){
        var me = this;
        me._setSettings(pos, 'pos_left', 'left');
        me._setSettings(pos, 'pos_top', 'top');
        me._setSettings(pos, 'pos_right', 'right');
        me._setSettings(pos, 'pos_bottom', 'bottom');
    }

    , _setSize: function(size){
        var me = this;
        me._setSettings(size, 'size_width', 'width');
        me._setSettings(size, 'size_height', 'height');
    }

    , _setBoxAlign: function(align){
        this._setSettings(align, 'pos_boxalign', 'boxAlign');
    }





    , _applyPos: function(pos){
        if(Utils.isEmpty(pos)) return;
        var opt = $.extend({'position': 'absolute'}, pos);
        this.$el.css(opt);
        this._setPos(pos);
    } 

    , _applySize: function(size){
        if(Utils.isEmpty(size)) return;
        var opt = $.extend({'position': 'absolute'}, size);
        this.$el.css(opt);
        this._setSize(size);
    }

    , _applyBoxAlign: function(align){
        if(Utils.isEmpty(align)) return;
        var me = this;
    
        apply();

        function apply(){
            if(!me.ec.isActivePage()){
                setTimeout(apply, 50);
                return;
            }

            var width = me.$el.width(),
                slideWidth = me.ec.$el.width();

            me._applyPos({
                left: ( slideWidth - width ) / 2
            });
            me._setBoxAlign(align);
        }
    }

};

$.extend(BoxSettingsInterface, SettingsUtilsInterface);

return BoxSettingsInterface;

});
