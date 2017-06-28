/**
 * Created by BingYing on 2017/4/6.
 */
var Project_management = (function () {

    /*IE8 console未定义*/
    window.console = window.console || (function () {
        var c = {};
        c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile
            = c.clear = c.exception = c.trace = c.assert = function () {
        };
        return c;
    })();

    /*树形*/
    tree();
    function tree() {
        $(".subNav").click(function () {
            $(".details-page").css("display","none");
            //点击是哪个，那个就拥有样式
            $(this).toggleClass("currentDd").siblings(".subNav").removeClass("currentDd");
            //控制菜单下拉折叠的速度
            $(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(300);
            //点击哪个，后面的图标改变
            $(this).children(".ud").css("background", "url(img/down.png)");
            $(this).siblings(".subNav").children(".ud").css("background", "url(img/up.png)");
        });
    }

    /*雷达图*/

    /*详情页*/
    details();
    function details() {
        /*双击课题名称后出现详情页*/
        $(".navContent").children("li").click(function(){
            $(".details-page").css("display","block");
        });
        /*关闭详情页*/
        $("#close").click(function(){
            $(".details-page").css("display","none");
        })
    }
    function init() {
    }

    return {
        init: init
    }
})();
Project_management.init();
