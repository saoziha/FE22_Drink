$(document).ready(function () {
    var getdiv = document.getElementById('blog');
    var stringData = '';
    $.getJSON("http://localhost:3000/blog/", function (data) {
        $.each(data, function (i, val) {
            stringData += '<div class="blog__img"><img class="blog__img--main" src="images/blog/' + val.images + '" alt=""/></div>' +
                '<h4 class="blog__heading">' + val.name + '</h4>' +
                '<div class="blog__info"><span class="blog__author">' + 'Đăng bởi: ' + val.author + '</span><span>|</span>' +
                '<span class="blog__time">' + val.time + '</span><span>|</span>' +
                '<span class="blog__comment">' + val.commentNum + ' bình luận' + '</span></div>' +
                '<p class="blog__content">' + val.content + '</p>';
            if (i >= 0) {
                return false;
            }
        });
        getdiv.innerHTML = stringData;
    });

});