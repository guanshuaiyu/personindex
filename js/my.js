$(function(){
    var header = $("#home");
    header.css({
        width:"100%", height: "900px"
    })
    var num=40;
    var arr=[];
    for(var i=0;i<num;i++) {
        var a=900-(900/num)*(i+1);
        var scene = $("<div>");
        scene.css({
            width: "100%",
            height:100/num+"%",
            perspective: "20000px",
            perspectiveOrigin:"center" +a+"px"
        }).appendTo(header);
        var box = $("<div>");
        box.css({
            width: "100%", height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            transition: "transform 2s ease "+0.05*i+"s",
            transformOrigin: "center center 800px"
        }).appendTo(scene);
        arr.push(box);
        for (var j = 0; j < 6; j++) {
            var panel = $("<div>");
            panel.css({position: "absolute", left: 0, top: 0}).appendTo(box);
            if (j == 0) {
                panel.css({
                    width: "100%",
                    height: "100%",
                    transform: "rotateX(90deg)",
                    transformOrigin: "top"
                })
            } else if (j == 1) {
                panel.css({
                    width: "100%",
                    height: "100%",
                    transform: "rotateY(-90deg)",
                    transformOrigin: "left",
                    background: "url(images/1.jpg) no-repeat 0 "+(-i*900/num)+"px"
                })
            } else if (j == 2) {
                panel.css({
                    width: "100%",
                    height: "100%",
                    transform: "rotateY(180deg)",
                    background: "url(images/2.jpg) no-repeat 0 "+(-i*900/num)+"px"
                })
            } else if (j == 3) {
                panel.css({
                    width: "100%",
                    height: "100%",
                    //left: "100px",
                    transform: "rotateY(90deg)",
                    transformOrigin: "right",
                    background: "url(images/3.jpg) no-repeat 0 "+(-i*900/num)+"px"
                })
            } else if (j == 4) {
                panel.css({
                    width: "100%",
                    height: "100%",
                    bottom:0,
                    transform: "rotateX(-90deg)",
                    transformOrigin: "bottom"
                })
            } else if (j == 5) {
                panel.css({
                    width: "100%",
                    height: "100%",
                    transform: "translateZ(1580px)",
                    background: "url(images/4.jpg) no-repeat 0 "+(-i*900/num)+"px"
                })
            }
        }
    }
    window.onblur=function(){
        //失去焦点
        clearInterval(t);
    }
    window.onfocus = function(){
        //得到焦点
        t = setInterval(move,4000);
    }
    var a= 0;
    var t = setInterval(move,4000);
    function move(){
        a+=90;
        for(var i=0;i<arr.length;i++){
            arr[i].css({
                transform:"rotateY("+a+"deg)"
            })
        }
    }
})
