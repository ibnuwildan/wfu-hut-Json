function TampilkanMenu() {
  //unutk mengambil data yang ada di Json
  $.getJSON("data/pizza.json", function (data) {
    let menu = data.menu;
    $.each(menu, function (i, data) {
      console.log(data);
      $("#daftar-menu").append(
        '  <div class="card" style="width: 18rem;">< img src = image/menu/' +
          data.gambar +
          ' ><div class="card-body"><h5 class="card-title">' +
          data.nama +
          '</h5><p class="card-text">' +
          data.deskripsi +
          '</p><h5 class="card-title">' +
          data.harga +
          ' </h5><a href="#" class="btn btn-primary">pesan sekarang</a></div></div >'
      );
    });
  });
}

TampilkanMenu();

//untuk menyesuaikan button active pd navbar
$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let kategori = $(this).html();
  $("h1").html(kategori);

  if (kategori == "All menu") {
    TampilkanMenu();
    return;
  }

  //untuk mendapatkan data sesuai dengan kategori yg ada di navbar
  $.getJSON("data/pizza.json", function (data) {
    let menu = data.menu;
    let contet = "";

    $.each(menu, function (i, data) {
      if (data.kategori == kategori.toLowerCase()) {
        contet +=
          '<div class="card" style="width: 18rem;">< img src = image/menu/' +
          data.gambar +
          ' ><div class="card-body"><h5 class="card-title">' +
          data.nama +
          '</h5><p class="card-text">' +
          data.deskripsi +
          '</p><h5 class="card-title">' +
          data.harga +
          ' </h5><a href="#" class="btn btn-primary">pesan sekarang</a></div></div >';
      }
    });
    $("#daftar-menu").html(contet);
  });
});
