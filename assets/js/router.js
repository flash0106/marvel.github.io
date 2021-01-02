//定义路由
function Router(){
    this.routes={};
    this.currentURL='';
}

Router.prototype.route = function(path,callback){
    this.routes[path] = callback || function(){};
}

Router.prototype.refresh = function(){
    this.currentURL = location.hash.slice(1) || '/index';
    this.routes[this.currentURL]();
}

Router.prototype.init = function () {
    window.addEventListener('load',this.refresh.bind(this),false);
    window.addEventListener('hashchange',this.refresh.bind(this),false);
}
// 地址栏hash值改变
function display_page(url){

    $("#router").load(url)
}
//注册 window 
window.Router = new Router();
window.Router.init();


//配置路由项


Router.route('/ironman',function(){
    display_page('assets/ironman.html');
})

Router.route('/thor',function(){
    display_page('./thor.html');
})

Router.route('/captainamerica',function(){
    display_page('./captainamerica.html');
})

Router.route('/antman',function(){
    display_page('./antman.html');
})

Router.route('/blackwidow',function(){
    display_page('./blackwidow.html');
})