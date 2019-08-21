var faker = require('faker')

function generate() {
    var product = []
    var blog = []
    for (var id = 0; id < 50; id++) {
        var img = 'newproduct_' + (Math.floor(Math.random() * 9) + 1) + '.png';

        var name = faker.name.findName();
        var price = faker.finance.amount();

        product.push({
            "id": id,
            "images": img,
            "name": name,
            "price": price
        })
    }
    for (var id = 0; id < 10; id++) {
        var img = 'blog_' + (Math.floor(Math.random() * 2) + 1) + '.png';
        var name = faker.name.findName();
        var author = faker.name.findName();

        var time1 = faker.date.between('01-01-2015', '01-01-2019');
        let current_datetime = new Date()
        let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()

        var commentNum = faker.finance.account(2);
        var content = faker.lorem.paragraph(7);
        blog.push({
            "id": id,
            "images": img,
            "name": name,
            "author": author,
            "time": formatted_date,
            "commentNum": commentNum,
            "content": content
        })
    }
    return {
        "product": product,
        "blog": blog
    }
}
module.exports = generate