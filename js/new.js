/**
 * Created by BingYing on 2017/4/6.
 */
var Project_management = (function () {

    /*IE8 consoleδ����*/
    window.console = window.console || (function () {
        var c = {};
        c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile
            = c.clear = c.exception = c.trace = c.assert = function () {
        };
        return c;
    })();

    /*����*/
    tree();
    function tree() {
        $(".subNav").click(function () {
            $(".details-page").css("display","none");
            //������ĸ����Ǹ���ӵ����ʽ
            $(this).toggleClass("currentDd").siblings(".subNav").removeClass("currentDd");
            //���Ʋ˵������۵����ٶ�
            $(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(300);
            //����ĸ��������ͼ��ı�
            $(this).children(".ud").css("background", "url(img/down.png)");
            $(this).siblings(".subNav").children(".ud").css("background", "url(img/up.png)");
        });
    }

    /*�״�ͼ*/

    /*����ҳ*/
    details();
    function details() {
        /*˫���������ƺ��������ҳ*/
        $(".navContent").children("li").click(function(){
            $(".details-page").css("display","block");
        });
        /*�ر�����ҳ*/
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
