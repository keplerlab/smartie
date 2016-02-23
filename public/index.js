$(function() {
            
    var c = window.location.href;

    if(c.indexOf("slave")==-1) {
        
        $("body").addClass("client");
        $(".links > a, .homebtn").click(function () {
            $.get(this.href.replace("client#", "setstate/")).done(function(d) {
                $('a[href=' + d + ']').addClass("active").siblings().removeClass("active");
                console.log()
            });
        });
    }
    else {
        function updateSlave() {
            $.get(c.replace("slave","getstate")).done(function(d) {
                if(window.location.hash != d) {
                    window.location.hash = d;
                    switch(d) {
                        case '#images':
                            $("#images iframe")[0].src = 'http://theslideshow.net/#simple/landscape';
                            break;
                        case '#games' : 
                            $("#games iframe")[0].src = 'http://0th.me/kepler/balloonspear/game?gid=abc1';
                            break;
                        case '#search' : 
                            $("#search iframe")[0].src = 'http://bing.com';
                            break;
                        case '#taj': 
                            $("#taj iframe")[0].src = 'http://www.thegatewayhotels.com/';
                    }
                    
                }
            }).fail(function() {
                    
            });
        }
        
        
        setInterval(updateSlave, 1000);
    }
});