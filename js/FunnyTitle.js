var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        //$('[rel="icon"]').attr('href', "/img/trhx2.png");
        document.title = '无法访问此网站';
        clearTimeout(titleTime);
    }
    else {
        //$('[rel="icon"]').attr('href', "/img/trhx2.png");
        document.title = '好耶！';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});