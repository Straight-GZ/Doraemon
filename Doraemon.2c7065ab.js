const string=`
/* \u{6211}\u{8981}\u{5F00}\u{59CB}\u{753B}\u{673A}\u{5668}\u{732B}\u{4E86} */
/* \u{9996}\u{5148}\u{753B}\u{673A}\u{5668}\u{732B}\u{7684}\u{5934} */
.head {
    border: 2px solid black;
    width: 200px;
    height: 200px;
    border-radius: 50%;
  /* \u{52A0}\u{4E0A}\u{989C}\u{8272} */
    background: #35a1c9;
    position: relative;
    top: 100px;
    left: 50%;
    margin-left: -100px;
}
/* \u{73B0}\u{5728}\u{753B}\u{673A}\u{5668}\u{732B}\u{7684}\u{5E3D}\u{5B50} */
.hat {
    position: relative;
}
.hat .fly {
    opacity: 0.6;
    width: 140px;
    height: 4px;
    background: #bd8d22;
  /* \u{628A}\u{5B83}\u{653E}\u{5728}\u{673A}\u{5668}\u{732B}\u{7684}\u{5934}\u{4E0A} */
    position: absolute;
    top: 92px;
    left: 50%;
    margin-left: -70px;
}
/* \u{5728}\u{753B}\u{4E0A}\u{5176}\u{4ED6}\u{7684}\u{5C0F}\u{4E1C}\u{897F} */
.hat .up {
    border: 2px solid black;
    width: 18px;
    height: 9px;
    position: absolute;
    background: #bd8d22;
    top: 82px;
    left: 50%;
    margin-left: -9px;
    border-radius: 9px 9px 0 0;
}
.hat .down {
    border: 2px solid black;
    width: 6px;
    height: 12px;
    background: #bd8d22;
    position: absolute;
    top: 90px;
    left: 50%;
    margin-left: -3px;
}
/* \u{7136}\u{540E}\u{753B}\u{4E0A}\u{5927}\u{5706}\u{8138} */
.head .face {
    background: white;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    top: 13px;
    left: 13px;
    position: relative;
}
/* \u{63A5}\u{4E0B}\u{6765}\u{8BE5}\u{753B}\u{673A}\u{5668}\u{732B}\u{7684}\u{773C}\u{775B}\u{4E86} */
/* \u{5148}\u{753B}\u{4E24}\u{4E2A}\u{5706} */
.head .face .eyes {
    border: 1px solid black;
    width: 56px;
    height: 56px;
    position: absolute;
    background: white;
    border-radius: 50%;
    z-index: 11;
}
.head .face .eyes.right {
    top: 0;
    right: 50%;
}
/* \u{7136}\u{540E}\u{753B}\u{4E0A}\u{9ED1}\u{9ED1}\u{7684}\u{5927}\u{773C}\u{73E0} */
.head .face .eyes.right::before {
    content: "";
    width: 15px;
    height: 20px;
    border: 1px solid black;
    position: absolute;
    border-radius: 30px/40px;
    right: 5px;
    top: 50%;
    margin-top: -10px;
    background: black;
}
.head .face .eyes.right::after {
    content: "";
    width: 6px;
    height: 8px;
    border: 1px solid black;
    position: absolute;
    border-radius: 30px/40px;
    right: 8px;
    top: 62%;
    margin-top: -10px;
    background: white;
}
.head .face .eyes.left {
    top: 0;
    left: 50%;
    position: absolute;
    overflow: hidden;
}
.head .face .eyes.left::before {
    content: "";
    width: 15px;
    height: 20px;
    border: 1px solid black;
    position: absolute;
    border-radius: 30px/40px;
    left: 5px;
    top: 50%;
    margin-top: -10px;
    background: black;
}
.head .face .eyes.left .y .x {
    z-index: 5;
    content: "";
    width: 26px;
    height: 13px;
    position: absolute;
    bottom: 0;
    right: 75%;
    margin-right: -13px;
    border: 3px solid black;
    border-bottom: transparent;
    border-radius: 13px 13px 0 0;
    background: white;
}

.head .face .eyes.left .y {
    animation: .8s alternate-reverse eye infinite linear 2s;
    top: -45px;
    left: 0;
    width: 100px;
    height: 100px;
    background: white;
    /*border:1px solid red;*/
    position: absolute;
    z-index: 10;
}

.head .face .eyes.left::after {
    content: "";
    width: 6px;
    height: 8px;
    border: 1px solid black;
    position: absolute;
    border-radius: 30px/40px;
    left: 8px;
    top: 62%;
    margin-top: -10px;
    background: white;
}
/* \u{73B0}\u{5728}\u{8BA9}\u{53F3}\u{8FB9}\u{7684}\u{773C}\u{775B}\u{52A8}\u{8D77}\u{6765} */
@keyframes eye {
    0% {
        transform: translateY(0px);
    }
    25% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(-80px);
    }
}
/* \u{4E0B}\u{9762}\u{5F00}\u{59CB}\u{753B}\u{9F3B}\u{5B50} */
.head .nose {
    border: 1px solid #b11635;
    background: #b11635;
    width: 38px;
    height: 38px;
    position: absolute;
    border-radius: 50%;
    right: 50%;
    margin-right: -19px;
    top: 46px;
    z-index: 1;
}
.head .nose::after {
    content: "";
    background: white;
    width: 12px;
    height: 12px;
    position: absolute;
    border-radius: 50%;
    top: 5px;
    left: 8px
}
/* \u{9F3B}\u{5B50}\u{753B}\u{597D}\u{4E86} */
/* \u{673A}\u{5668}\u{732B}\u{7684}\u{80E1}\u{5B50}\u{4E5F}\u{8981}\u{753B}\u{4E00}\u{4E0B} */
.face .beard {
    border: 1px solid black;
    width: 70px;
    height: 2px;
    background: black;
    position: absolute;
}
/* \u{5DE6}\u{8FB9}\u{7684} */
.beard.leftFirst {
    top: 50px;
    left: -10px;
    transform: rotateZ(25deg);
}
.beard.leftSec {
    top: 73px;
    left: -10px;
}
.beard.leftThird {
    top: 89px;
    left: -10px;
    transform: rotateZ(-12deg);
}
/* \u{53F3}\u{8FB9}\u{7684} */
.beard.rightFirst {
    top: 50px;
    right: -10px;
    transform: rotateZ(-25deg);
}
.beard.rightSec {
    top: 73px;
    right: -10px;
}
.beard.rightThird {
    top: 89px;
    right: -10px;
    transform: rotateZ(12deg);

}
.center {
    border: 1px solid black;
    background: black;
    width: 2px;
    height: 20px;
    position: absolute;
    left: 50%;
    margin-left: -1px;
    top: 80px;
    z-index: 0;
}
/* \u{80E1}\u{5B50}\u{5B8C}\u{6210}\u{4E86} */
/* \u{4E0B}\u{9762}\u{662F}\u{673A}\u{5668}\u{732B}\u{7684}\u{5634}\u{5DF4} */
.head .mouth {
    width: 130px;
    height: 65px;
    position: relative;
    top: 100px;
    left: 50%;
    margin-left: -65px;
    border-radius: 0 0 110px 110px;
    overflow: hidden;
    /* \u{52A0}\u{4E0A}\u{989C}\u{8272} */
    background: #b11635;
}
/* \u{628A}\u{7231}\u{5FC3}\u{4E00}\u{6837}\u{7684}\u{820C}\u{5934}\u{753B}\u{51FA}\u{6765} */
.head .mouth .tongue .left {
    width: 60px;
    height: 60px;
    background: #ca2533;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    left: 10px
}
.head .mouth .tongue .right {
    width: 60px;
    height: 60px;
    background: #ca2533;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    right: 10px
}
/* \u{63A5}\u{4E0B}\u{6765}\u{662F}\u{673A}\u{5668}\u{732B}\u{7684}\u{8EAB}\u{4F53}\u{90E8}\u{5206} */
.body {
    border: 3px solid black;
    background: #35a1c9;
    height: 160px;
    width: 160px;
    position: absolute;
    left: 50%;
    margin-left: -80px;
    border-radius: 50%;
    top: 230px;
    z-index: -2;
}
/* \u{9996}\u{5148}\u{753B}\u{51FA}\u{809A}\u{5B50}\u{4E0A}\u{7684}\u{94C3}\u{94DB} */
.body .bell .up {
    border: 1px solid black;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: #b11635;
    position: relative;
    top: -153px;
    left: 50%;
    margin-left: -75px;
}
.body .bell .down {
    border: 1px solid red;
    width: 30px;
    height: 30px;
    background: #f19629;
    border-radius: 50%;
    position: absolute;
    top: 68px;
    right: 50%;
    margin-right: -15px;
}
.body .bell .down::before {
    content: "";
    width: 8px;
    height: 8px;
    background: black;
    position: absolute;
    top: 10px;
    right: 50%;
    margin-right: -4px;
    border-radius: 50%;
}
.body .bell .down::after {
    content: "";
    border: 1px solid black;
    background: black;
    width: 14px;
    height: 1px;
    position: absolute;
    left: 50%;
    margin-left: -7px;
    top: 20px;
}
/* \u{753B}\u{4E0A}\u{80D6}\u{80D6}\u{7684}\u{809A}\u{5B50} */
.belly {
    width: 110px;
    height: 80px;
    border-radius: 110px/80px;
    position: relative;
    left: 50%;
    margin-left: -55px;
    top: 50px;
    background: white;
}
/*\u{753B}\u{4E0A}\u{4E07}\u{80FD}\u{7684}\u{5C0F}\u{53E3}\u{888B}*/
.belly .bag {
    border: 3px solid black;
    width: 60px;
    height: 30px;
    position: relative;
    top: 33px;
    left: 50%;
    margin-left: -30px;
    border-radius: 0 0 110px 110px;
    overflow: hidden;

}
/*\u{809A}\u{5B50}\u{5C31}\u{5B8C}\u{6210}\u{5566}*/
/*\u{73B0}\u{5728}\u{5F00}\u{59CB}\u{753B}\u{673A}\u{5668}\u{732B}\u{7684}\u{80F3}\u{818A}*/
.hand {
    border: 3px solid black;
    border-radius: 50%;
    width: 100px;
    height: 60px;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    top: 225px;
    background: #35a1c9;
    z-index: -2;
}
/*\u{5DE6}\u{8FB9}\u{7684}\u{80F3}\u{818A}*/
.hand.left::before {
    border: 3px solid black;
    content: "";
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: white;
    position: absolute;
    left: -20px;
    top: 10px
}
.hand.left {
    transform: translateX(-80px) rotateZ(50deg);
}
/*\u{53F3}\u{8FB9}\u{7684}\u{80F3}\u{818A}*/
.hand.right::before {
    border: 3px solid black;
    content: "";
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: white;
    position: absolute;
    right: -20px;
    top: 10px
}
.hand.right {
    transform: translateX(80px) rotateZ(-50deg);
}
/*\u{80F3}\u{818A}\u{5B8C}\u{6210}\u{4E86}*/
/*\u{5F00}\u{59CB}\u{753B}\u{817F}*/
.leg {
    width: 60px;
    height: 120px;
    border: 3px solid black;
    background: white;
    position: absolute;
    border-radius: 60px/120px;
    top: 300px;
    z-index: -3;
}
.leg.right {
    left: 50%;
    transform: translateX(-5px);
}
.leg.left {
    right: 50%;
    transform: translateX(5px);
}
/*\u{673A}\u{5668}\u{732B}\u{5C31}\u{753B}\u{5B8C}\u{5566}*/
@keyframes rotate {
    0% {
        transform: rotate3d(0, 1, 0, 0deg);
    }

    100% {
        transform: rotate3d(0, 1, 0, 360deg);
    }
}
@keyframes eye {
    0% {
        transform: translateY(0px);
    }
    25% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(-15px);
    }
}

@keyframes identifier {
    0% {
        transform: translateY(-75%);
    }
    25% {
        transform: translateY(-50%);
    }
    100% {
        transform: translateY(25%);
    }
}
/*\u{6700}\u{540E}\u{8BA9}\u{673A}\u{5668}\u{732B}\u{52A8}\u{8D77}\u{6765}*/
.Doraemon {
    animation: 2s alternate-reverse identifier infinite ease-in;
}
.hat .fly {
    animation-name: rotate;
    animation-duration: .1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
/*\u{5927}\u{529F}\u{544A}\u{6210}\u{FF01}*/`,player={string2:"",id:void 0,time:100,ui:{end:document.querySelector("#end"),demo1:document.querySelector("#test"),demo2:document.querySelector("#test2"),btnPause:document.querySelector("#pause"),btnPlay:document.querySelector("#play"),btnNormal:document.querySelector("#normal"),btnSlow:document.querySelector("#slow"),btnFast:document.querySelector("#fast")},n:1,init:()=>{player.ui.demo1.innerText=player.string2,player.ui.demo2.innerHTML=string.substr(0,player.n),player.play(),player.bindEvents()},bindEvents:()=>{player.ui.end.onclick=player.end,player.ui.btnPause.onclick=player.pause,player.ui.btnPlay.onclick=player.play,player.ui.btnNormal.onclick=player.normal,player.ui.btnSlow.onclick=player.slow,player.ui.btnFast.onclick=player.fast},run:()=>{(player.n+=1,player.n>string.length)?window.clearInterval(player.id):("\n"===string[player.n]?player.string2+="<br>":" "===string[player.n]?player.string2+="&nbsp":player.string2+=string[player.n],player.ui.demo2.innerText=string.substr(0,player.n),player.ui.demo1.innerHTML=player.string2,player.ui.demo1.scrollTop=player.ui.demo1.scrollHeight)},end:()=>{player.string2="",player.n=string.length;for(let e=0;e<string.length;e++)"\n"===string[e]?player.string2+="<br>":" "===string[e]?player.string2+="&nbsp":player.string2+=string[e];player.ui.demo1.innerHTML=player.string2,player.ui.demo2.innerText=string.substr(0,player.n)},play:()=>{player.id=setInterval(player.run,player.time)},pause:()=>{window.clearInterval(player.id)},slow:()=>{player.pause(),player.time=300,player.play()},normal:()=>{player.pause(),player.time=100,player.play()},fast:()=>{player.pause(),player.time=0,player.play()}};player.init();
//# sourceMappingURL=Doraemon.2c7065ab.js.map
