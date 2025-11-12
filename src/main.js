const string = `
/* 我要开始画机器猫了 */
/* 首先画机器猫的头 */
.head {
    border: 2px solid black;
    width: 200px;
    height: 200px;
    border-radius: 50%;
  /* 加上颜色 */
    background: #35a1c9;
    position: relative;
    top: 100px;
    left: 50%;
    margin-left: -100px;
}
/* 现在画机器猫的帽子 */
.hat {
    position: relative;
}
.hat .fly {
    opacity: 0.6;
    width: 140px;
    height: 4px;
    background: #bd8d22;
  /* 把它放在机器猫的头上 */
    position: absolute;
    top: 92px;
    left: 50%;
    margin-left: -70px;
}
/* 在画上其他的小东西 */
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
/* 然后画上大圆脸 */
.head .face {
    background: white;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    top: 13px;
    left: 13px;
    position: relative;
}
/* 接下来该画机器猫的眼睛了 */
/* 先画两个圆 */
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
/* 然后画上黑黑的大眼珠 */
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
/* 现在让右边的眼睛动起来 */
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
/* 下面开始画鼻子 */
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
/* 鼻子画好了 */
/* 机器猫的胡子也要画一下 */
.face .beard {
    border: 1px solid black;
    width: 70px;
    height: 2px;
    background: black;
    position: absolute;
}
/* 左边的 */
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
/* 右边的 */
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
/* 胡子完成了 */
/* 下面是机器猫的嘴巴 */
.head .mouth {
    width: 130px;
    height: 65px;
    position: relative;
    top: 100px;
    left: 50%;
    margin-left: -65px;
    border-radius: 0 0 110px 110px;
    overflow: hidden;
    /* 加上颜色 */
    background: #b11635;
}
/* 把爱心一样的舌头画出来 */
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
/* 接下来是机器猫的身体部分 */
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
/* 首先画出肚子上的铃铛 */
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
/* 画上胖胖的肚子 */
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
/*画上万能的小口袋*/
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
/*肚子就完成啦*/
/*现在开始画机器猫的胳膊*/
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
/*左边的胳膊*/
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
/*右边的胳膊*/
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
/*胳膊完成了*/
/*开始画腿*/
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
/*机器猫就画完啦*/
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
/*最后让机器猫动起来*/
.Doraemon {
    animation: 2s alternate-reverse identifier infinite ease-in;
}
.hat .fly {
    animation-name: rotate;
    animation-duration: .1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
/*大功告成！*/`

const player = {
	string2: '',
	id: undefined,
	time: 100,
	ui: {
		end: document.querySelector('#end'),
		demo1: document.querySelector('#test'),
		demo2: document.querySelector('#test2'),
		btnPause: document.querySelector('#pause'),
		btnPlay: document.querySelector('#play'),
		btnNormal: document.querySelector('#normal'),
		btnSlow: document.querySelector('#slow'),
		btnFast: document.querySelector('#fast')
	},
	n: 1,
	init: () => {
		player.ui.demo1.innerText = player.string2
		player.ui.demo2.innerHTML = string.substr(0, player.n)
		player.play()
		player.bindEvents()
	},
	bindEvents: () => {
		player.ui.end.onclick = player.end
		player.ui.btnPause.onclick = player.pause
		player.ui.btnPlay.onclick = player.play
		player.ui.btnNormal.onclick = player.normal
		player.ui.btnSlow.onclick = player.slow
		player.ui.btnFast.onclick = player.fast
	},
	run: () => {
		player.n += 1
		if (player.n > string.length) {
			window.clearInterval(player.id)
			return
		}
		if (string[player.n] === '\n') {
			player.string2 += '<br>'
		} else if (string[player.n] === ' ') {
			player.string2 += '&nbsp'
		} else {
			player.string2 += string[player.n]
		}
		player.ui.demo2.innerText = string.substr(0, player.n)
		player.ui.demo1.innerHTML = player.string2
		player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight
	},
	end: () => {
		player.string2 = ''
		player.n = string.length
		for (let i = 0; i < string.length; i++) {
			if (string[i] === '\n') {
				player.string2 += '<br>'
			} else if (string[i] === ' ') {
				player.string2 += '&nbsp'
			} else {
				player.string2 += string[i]
			}
		}
		player.ui.demo1.innerHTML = player.string2
		player.ui.demo2.innerText = string.substr(0, player.n)
	},
	play: () => {
		player.id = setInterval(player.run, player.time)
	},
	pause: () => {
		window.clearInterval(player.id)
	},
	slow: () => {
		player.pause()
		player.time = 300
		player.play()
	},
	normal: () => {
		player.pause()
		player.time = 100
		player.play()
	},
	fast: () => {
		player.pause()
		player.time = 0
		player.play()
	}
}
player.init()