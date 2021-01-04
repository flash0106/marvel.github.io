window.onload=function(){
    var routeView=null;//路由视图
    window.addEventListener('hashchange',function(){//监听路由变化
        var routeView=document.getElementById("hero");
        switch(location.hash){//判断路由
            case '#/ironman':
                add(0);
                break;
            case '#/thor':
                add(1);
                break;
            case '#/captainamerica':
                add(2);
                break;
            case '#/antman':
                add(3);
                break;
            case '#/blackwidow':
                add(4);
                break;
            default:
                return;
        }
    })
}

function add(i){
    var url="assets/json/herointro.json";
    var request=new XMLHttpRequest();
    request.open("get",url);
    request.send(null);
    request.onload=function(){
        if(request.status==200){
            var data=JSON.parse(request.responseText); 
            var res=template("detail_template",data[i]);
            document.getElementById("hero").innerHTML=res;
        }
    }
}
