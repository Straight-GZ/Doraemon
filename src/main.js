let n=1;
const string=`你好，今天我来画一个哆啦A梦`
let html=document.querySelector('.html')
html.innerHTML=string.substr(0,n)
setInterval(()=>{
    n+=1
    if(n<=string.length){
        html.innerHTML=string.substr(0,n)
    }

},300)


