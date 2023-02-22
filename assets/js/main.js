$(document).ready(function () {
  $(window).on("scroll", function () {
    handleScrollTop();
  });

  //Close nav-item on click
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  //Portfolio Gallery
  $("#gallery1").on("click", function (event) {
    event.preventDefault();
    Fresco.show([
      {
        url: "assets/img/projects/hotel/banner.png",
        caption: "Map Reservation",
      },
      { url: "assets/img/projects/hotel/1.jpg", caption: "Login Page" },
      {
        url: "assets/img/projects/hotel/2.jpg",
        caption: "Reservation Ads Page",
      },
      { url: "assets/img/projects/hotel/3.jpg", caption: "Home Page" },
    ]);
  });

  $("#gallery3").on("click", function (event) {
    event.preventDefault();
    Fresco.show([
      {
        url: "assets/img/projects/barra_ferro/login.jpg",
        caption: "Tela de login",
      },
      {
        url: "assets/img/projects/barra_ferro/modulos.jpg",
        caption: "Seleção de módulos",
      },
      {
        url: "assets/img/projects/barra_ferro/modulo_embarque.jpg",
        caption: "Seleção de módulos de embarque",
      },
      {
        url: "assets/img/projects/barra_ferro/plano.jpg",
        caption: "Seleção de plano",
      },
      {
        url: "assets/img/projects/barra_ferro/packlist.jpg",
        caption: "Seleção de packlist",
      },
      {
        url: "assets/img/projects/barra_ferro/leitura.jpg",
        caption: "Leitura de itens",
      },
      {
        url: "assets/img/projects/barra_ferro/transferencia.jpg",
        caption: "Seleção de módulos transferência",
      },
      {
        url: "assets/img/projects/barra_ferro/transf_lote.jpg",
        caption: "Transferência de material",
      },
      {
        url: "assets/img/projects/barra_ferro/menu-embal.jpg",
        caption: "Seleção de módulos embalagens",
      },
      {
        url: "assets/img/projects/barra_ferro/conf_item.jpg",
        caption: "Conferência de item da NF",
      },
      {
        url: "assets/img/projects/barra_ferro/cons-embal.jpg",
        caption: "Consulta embalagem",
      },
      {
        url: "assets/img/projects/barra_ferro/trans-embal.jpg",
        caption: "Transferência embalagem",
      },
      {
        url: "assets/img/projects/barra_ferro/consul-dep-loc.jpg",
        caption: "Consulta Dep. Loc.",
      },
      {
        url: "assets/img/projects/barra_ferro/transf-processo.jpg",
        caption: "Transferência de embal.",
      },
      {
        url: "assets/img/projects/barra_ferro/dev-material.jpg",
        caption: "Devolução de embal.",
      },
    ]);
  });

  $("#gallery4").on("click", function (event) {
    event.preventDefault();
    Fresco.show([
      {
        url: "assets/img/projects/cadastro_reembolso/login.jpg",
        caption: "Tela de login",
      },
      {
        url: "assets/img/projects/cadastro_reembolso/principal.jpg",
        caption: "Tela de principal",
      },
      {
        url: "assets/img/projects/cadastro_reembolso/list-view.jpg",
        caption: "Tela de secundária",
      },
      {
        url: "assets/img/projects/cadastro_reembolso/modal-cadastro.jpg",
        caption: "Modal de cadastro de despesa",
      },
      {
        url: "assets/img/projects/cadastro_reembolso/modal-filtro.jpg",
        caption: "Modal de filtro de despesa",
      },
    ]);
  });

  $("#gallery5").on("click", function (event) {
    event.preventDefault();
    Fresco.show([
      { url: "assets/img/projects/casp/principal.jpg", caption: "Tela principal" },
      { url: "assets/img/projects/casp/secundaria.jpg", caption: "Tela já filtrada" },
    ]);
  });

  $("#gallery6").on("click", function (event) {
    event.preventDefault();
    Fresco.show([
      { url: "assets/img/projects/cq/principal.jpg", caption: "Tela principal" },
    ]);
  });

  $("#gallery7").on("click", function (event) {
    event.preventDefault();
    Fresco.show([
      { url: "assets/img/projects/epi/epi.jpg", caption: "Tela principal" },
    ]);
  });

  $("#gallery8").on("click", function (event) {
    event.preventDefault();
    Fresco.show([
      { url: "assets/img/projects/inventario/login.jpg", caption: "Tela de login" },
      { url: "assets/img/projects/inventario/modulos.jpg", caption: "Tela de seleção de módulos" },
      { url: "assets/img/projects/inventario/endereçamento.jpg", caption: "Tela de endereçamento" },
      { url: "assets/img/projects/inventario/primeira.jpg", caption: "Tela de contagem de inventário" },
      { url: "assets/img/projects/inventario/contagem.jpg", caption: "Tela de leitura de inventário" },
    ]);
  });

  $("#gallery9").on("click", function (event) {
    event.preventDefault();
    Fresco.show([
      { url: "assets/img/projects/pokedex/principal.jpg", caption: "Tela de seleção de pokemon" },
      { url: "assets/img/projects/pokedex/detalhes.jpg", caption: "Tela de detalhes" },
    ]);
  });

  $("#gallery10").on("click", function (event) {
    event.preventDefault();
    Fresco.show([
      { url: "assets/img/projects/pon/login.jpg", caption: "Tela de login" },
      { url: "assets/img/projects/pon/modulos.jpg", caption: "Tela de seleção de módulos" },
      { url: "assets/img/projects/pon/plano.jpg", caption: "Tela de seleção de plano de cortes" },
      { url: "assets/img/projects/pon/reservas.jpg", caption: "Tela de ops reservadas" },
      { url: "assets/img/projects/pon/etapa.jpg", caption: "Seleção de etapa" },
      { url: "assets/img/projects/pon/etapas_reservas.jpg", caption: "Seleção de etapa reservadas" },
      { url: "assets/img/projects/pon/reporte.jpg", caption: "Tela de reporte" },
      { url: "assets/img/projects/pon/processo.jpg", caption: "Tela de processo de fábrica" },
      { url: "assets/img/projects/pon/reportar.jpg", caption: "Tela de reportar" },
      { url: "assets/img/projects/pon/apontamento.jpg", caption: "Tela de apontamento" },
    ]);
  });

  //Set active tab on navbar
  $(window).scroll(function () {
    $(".nav-item").removeClass("active");
    $(".active").parent().addClass("active");
  });

  handleScrollTop();
  function handleScrollTop() {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > 10) {
      $(".navbar").addClass("active");
    } else {
      $(".navbar").removeClass("active");
    }
  }

  //Animations
  AOS.init({
    disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    duration: 2000, // values from 0 to 3000, with step 50ms
  });
});
