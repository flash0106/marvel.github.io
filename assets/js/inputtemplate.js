var url="assets/json/hero.json";
var request=new XMLHttpRequest();
request.open("get",url);
request.send(null);
request.onload=function(){
    if(request.status==200){
    var hero=JSON.parse(request.responseText);  //request.responseText
    }
    // 获取数据
    for(var i=0;i<hero.length;i++){
        if(i%2==0){
            // 将数据放入模板中
            var res=template("template1",hero[i]);
            // 将模板放入页面中
            document.getElementById("hero").innerHTML+=res;
        }else{
            // 将数据放入模板中 
            var res=template("template2",hero[i]);
            // 将模板放入页面中
            document.getElementById("hero").innerHTML+=res;
        }
    
    }
}		
