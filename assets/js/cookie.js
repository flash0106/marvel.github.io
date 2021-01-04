function clientCheck(){//登录
    var name = document.getElementById("loginName").value;
    var password1=document.getElementById("password").value;
    if(password1.length<8||password1!=getCookie(name)){
        alert("账号或密码错误");
        return false;
    }
    document.getElementById("form1").innerHTML="欢迎您,"+name;
    return true;
}
function init(){//注册
    var name = document.getElementById("loginName").value;
    var password1=document.getElementById("password").value;
    if(name ==  null || name == ''){
        alert("用户名不能为空");
        return false;
    }
    if(password1.length<8){
        alert("密码长度不能小于8");
        return false;
    }
    setCookie(name,password1,30);
    alert("注册成功！");
    return true;
}
function setCookie(cname,cvalue,exdays)
{
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) 
    {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) 
        return c.substring(name.length,c.length);
    }
    return "";
}
