$(document).ready(function () {

    var getSingleProduct = document.getElementsByClassName('product-single');
    Array.from(getSingleProduct).forEach(function (item) {
        var stringData = '';
        $.getJSON("http://localhost:3000/product/", function (data) {
            $.each(data, function (i, val) {
                stringData += '<div class="col-md-3 col-lg-3">' +
                    '<div class="new-product__item">' +
                    '<img class="new-product__img" src="images/products/' + val.images + '" alt=""/>' +
                    '<h3 class="new-product__name">' + val.name + '</h3>' +
                    '<div class="new-product__price">' +
                    '<h4 class="new-product__price--main">' + val.price + '<sup>đ </sup></h4><span class="text-muted">-</span>' +
                    '<h4 class="new-product__price--sub text-muted"> 450.000<sup>đ</sup></h4>' +
                    '</div>' +
                    '<button class="btn btn--primary btn__add">ADD TO CART</button>' +
                    '<div class="new-product__option d-flex justify-content-between">' +
                    '<div class="new-product__option--item"><i class="fas fa-heart"></i><span>Yêu thích</span></div>' +
                    '<div class="new-product__option--item"><i class="far fa-chart-bar"></i><span>So sánh</span></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
                if (i >= 3) {
                    return false;
                }
            });
            item.innerHTML = stringData;
        });
    })
    var stringData = '';
    var getListProduct = document.getElementById('product-list');
    $.getJSON("http://localhost:3000/product/", function (data) {
        $.each(data, function (i, val) {
            stringData += '<div class="col-md-4 col-lg-4">' +
                '<div class="new-product__item">' +
                '<img class="new-product__img" src="images/products/' + val.images + '" alt=""/>' +
                '<h3 class="new-product__name">' + val.name + '</h3>' +
                '<div class="new-product__price">' +
                '<h4 class="new-product__price--main">' + val.price + '<sup>đ </sup></h4><span class="text-muted">-</span>' +
                '<h4 class="new-product__price--sub text-muted"> 450.000<sup>đ</sup></h4>' +
                '</div>' +
                '<button class="btn btn--primary btn__add">ADD TO CART</button>' +
                '<div class="new-product__option d-flex justify-content-between">' +
                '<div class="new-product__option--item"><i class="fas fa-heart"></i><span>Yêu thích</span></div>' +
                '<div class="new-product__option--item"><i class="far fa-chart-bar"></i><span>So sánh</span></div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';
            if (i > 7) {
                return false;
            }
        });
        getListProduct.innerHTML = stringData;
    });
});