
    var banner=$("#banner");
    // console.log(banner);
    var banner_img=$(".banner_img")[0];
    //console.log(banner_img);
    var ban_img=$(".ban_img");
    var circle=$(".hot1");
    //console.log(circle);
    var b_left=$(".btnL")[0];
    var b_right=$(".btnR")[0];
    var b_ow=parseInt(getStyle($(".ban_img")[0],"width"));
    //console.log(b_ow);
    var n=0;  //当前的第一张
    var next=0; //即将出现的下一张
    var flag=true;
    //开关作用：解决用户快速点击出现的一些空白区域，当点击运行完一和动画，才让出现下一张;
    var t=setInterval(move,3666);
    function move(){
        if(flag==false){
            return;
        }
        flag=false;
        next=n+1;   //第一张还没开始动时，下一张就做好准备;
        if(next>=ban_img.length){
            next=0;
        }
        ban_img[next].style.left=b_ow+"px";
        animate(ban_img[n],{left:-b_ow},600);
        animate(ban_img[next],{left:0},600,function(){
            flag=true;
        });
        for(var i=0; i<circle.length; i++){
            circle[i].style.background="#a5a5a5";
        }
        circle[next].style.background="#d60055";
        n=next;
    }
    banner_img.onmouseover=function(){
        clearInterval(t);
    }
    banner_img.onmouseout=function(){
        t=setInterval(move,3600);
    }
    b_right.onclick=function(){
        move();
    }
    b_left.onclick=function(){
        moveL();
    }
    function moveL(){
        if(flag==false){
            return;
        }
        flag=false;
        next=n-1;
        if(next<0){
            next=ban_img.length-1;
        }
        ban_img[next].style.left=-b_ow+"px";
        animate(ban_img[n],{left:b_ow},600);
        animate(ban_img[next],{left:0},600,function(){
            flag=true;
        });
        for(var i=0; i<circle.length; i++){
            circle[i].style.background="#e5e5e5";
        }
        circle[next].style.background="#d60055";
        n=next;
    }
    //选项卡
    for(var i=0; i<circle.length; i++){
        circle[i].index=i;
        circle[i].onclick=function(){
            if(this.index>n){
                if(flag==false){
                    return;
                }
                flag=false;
                ban_img[this.index].style.left=b_ow+"px";
                animate(ban_img[n],{left:-b_ow},600);
                animate(ban_img[this.index],{left:0},600,function(){
                    flag=true;
                });
            }else if(this.index<n){
                if(flag=false){
                    return;
                }
                flag=false;
                ban_img[this.index].style.left=-b_ow+"px";
                animate(ban_img[n],{left:b_ow},600);
                animate(ban_img[this.index],{left:0}
                    ,600,function(){
                        flag=true;
                    });
            }else{
                return;
            }
            circle[n].style.background="#a5a5a5";
            circle[this.index].style.background="#d60055";
            n=this.index;
            next=this.index;
        }
    }
