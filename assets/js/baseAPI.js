$.ajaxPrefilter(function(options) {
    // 再发起真正的ajax请求之前，通过一拼接请求的根路径
    options.url = 'http://ajax.frontend.itheima.net' + options.url
})