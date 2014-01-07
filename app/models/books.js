var book = DS.Model.extend({
  course: DS.belongsTo('course'),
  title: DS.attr('string'),
  author: DS.attr('string'),
  isbn: DS.attr('string'),
  srcUrl: DS.attr('string'),
  imageUrl: DS.attr('string')
});

book.FIXTURES = [
  {
    id: 1,
    title: "Programming the World Wide Web (7th Edition)",
    author: "Robert W. Sebesta",
    isbn: "978-0-13-266581-0",
    srcUrl: "http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=978-0-13-266581-0&rh=n%3A283155%2Ck%3A978-0-13-266581-0",
    imageUrl: "http://ecx.images-amazon.com/images/I/51pQ5%2B56n1L._AA200_.jpg"
  },
  {
    id: 2,
    title: "Pro C# 5.0 and the .NET 4.5 Framework",
    author: "Andrew Troelsen",
    isbn: "978-1430242338",
    srcUrl: "http://www.amazon.com/Pro-5-0-NET-4-5-Framework/dp/1430242337/ref=pd_bxgy_b_img_y",
    imageUrl: "http://ecx.images-amazon.com/images/I/51PimrR2lzL._BO2,204,203,200_PIsitb-sticker-arrow-click,TopRight,35,-76_AA300_SH20_OU01_.jpg"
  },
  {
    id: 3,
    title: "Pro ASP.NET MVC 4",
    author: "Adam Freeman",
    isbn: "978-1430242369",
    srcUrl: "http://www.amazon.com/Pro-ASP-NET-MVC-Adam-Freeman/dp/1430242361/ref=pd_bxgy_b_img_y",
    imageUrl: "http://ecx.images-amazon.com/images/I/51Rms2VIcWL._BO2,204,203,200_PIsitb-sticker-arrow-click,TopRight,35,-76_AA300_SH20_OU01_.jpg"
  }
];

export default book;
