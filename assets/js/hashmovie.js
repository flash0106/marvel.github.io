window.onload=function(){
    var routeView=null;//路由视图
    window.addEventListener('hashchange',function(){//监听路由变化
        var routeView=document.getElementById("movie");
        switch(location.hash){//判断路由
            case '#/movie-ironman':
                add(0);
                break;
            case '#/movie-captainamerica':
                add(1);
                break;
            case '#/movie-thor':
                add(2);
                break;
            case '#/movie-avengers':
                add(3);
                break;
            default:
                return;
        }
    })
}

function add(i){
    var url="assets/json/movieintro.json";
    var request=new XMLHttpRequest();
    request.open("get",url);
    request.send(null);
    request.onload=function(){
        if(request.status==200){
            var data=JSON.parse(request.responseText); 
            var res=template("detail_template",data[i]);
            document.getElementById("movie").innerHTML=res;
        }
    }
}