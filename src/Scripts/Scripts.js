import jquery from "jquery"


(function ($) {
  

  var $sToggle = $(".search-toggle");
  var $searchBody = $(".search-body");
  $sToggle.on("click", function (e) {
    e.preventDefault();
    $searchBody.slideToggle();
  });
  /*---------------------------
          Commons Variables
       ------------------------------ */

  var $window = $(window),
      $body = $("body");
  /*--------------------------
      Sticky Menu
    ---------------------------- */

  $($window).on("scroll", function () {
    var scroll = $($window).scrollTop();

    if (scroll < 150) {
      $("#sticky").removeClass("is-isticky");
    } else {
      $("#sticky").addClass("is-isticky");
    }
  });
  /*---------------------------------
            Off Canvas toggler Function
        -----------------------------------*/

  var $offCanvasToggle = $(".offcanvas-toggle"),
      $offCanvas = $(".offcanvas"),
      $offCanvasOverlay = $(".offcanvas-overlay"),
      $mobileMenuToggle = $(".mobile-menu-toggle");
  $offCanvasToggle.on("click", function (e) {
    e.preventDefault();
    var $this = $(this),
        $target = $this.attr("href");
    $body.addClass("offcanvas-open");
    $($target).addClass("offcanvas-open");
    $offCanvasOverlay.fadeIn();

    if ($this.parent().hasClass("mobile-menu-toggle")) {
      $this.addClass("close");
    }
  });
  $(".offcanvas-close, .offcanvas-overlay").on("click", function (e) {
    e.preventDefault();
    $body.removeClass("offcanvas-open");
    $offCanvas.removeClass("offcanvas-open");
    $offCanvasOverlay.fadeOut();
    $mobileMenuToggle.find("a").removeClass("close");
  });
  /*----------------------------------
           Off Canvas Menu
       -----------------------------------*/

  function mobileOffCanvasMenu() {
    var $offCanvasNav = $(".offcanvas-menu, .overlay-menu"),
        $offCanvasNavSubMenu = $offCanvasNav.find(".offcanvas-submenu");
    /*Add Toggle Button With Off Canvas Sub Menu*/

    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"></span>');
    /*Category Sub Menu Toggle*/

    $offCanvasNav.on("click", "li a, .menu-expand", function (e) {
      var $this = $(this);

      if ($this.attr("href") === "#" || $this.hasClass("menu-expand")) {
        e.preventDefault();

        if ($this.siblings("ul:visible").length) {
          $this.parent("li").removeClass("active");
          $this.siblings("ul").slideUp();
          $this.parent("li").find("li").removeClass("active");
          $this.parent("li").find("ul:visible").slideUp();
        } else {
          $this.parent("li").addClass("active");
          $this.closest("li").siblings("li").removeClass("active").find("li").removeClass("active");
          $this.closest("li").siblings("li").find("ul:visible").slideUp();
          $this.siblings("ul").slideDown();
        }
      }
    });
  }

  mobileOffCanvasMenu();
  var $offcanvasMenu2 = $("#offcanvas-menu2 li a");
  $offcanvasMenu2.on("click", function (e) {
    // e.preventDefault();
    $(this).closest("li").toggleClass("active");
    $(this).closest("li").siblings().removeClass("active");
    $(this).closest("li").siblings().children(".category-sub-menu").slideUp();
    $(this).closest("li").siblings().children(".category-sub-menu").children("li").toggleClass("active");
    $(this).closest("li").siblings().children(".category-sub-menu").children("li").removeClass("active");
    $(this).parent().children(".category-sub-menu").slideToggle();
  });
  /*----------------------------  
        All Category toggle  
     ------------------------------*/

  $(".category-toggle").on("click", function (e) {
    $(".category-menu").slideToggle(300);
  });
  $(".menu-item-has-children-1").on("click", function (e) {
    $(".category-mega-menu-1").slideToggle("slow");
  });
  $(".menu-item-has-children-2").on("click", function (e) {
    $(".category-mega-menu-2").slideToggle("slow");
  });
  $(".menu-item-has-children-3").on("click", function (e) {
    $(".category-mega-menu-3").slideToggle("slow");
  });
  $(".menu-item-has-children-4").on("click", function (e) {
    $(".category-mega-menu-4").slideToggle("slow");
  });
  $(".menu-item-has-children-5").on("click", function (e) {
    $(".category-mega-menu-5").slideToggle("slow");
  });
  $(".menu-item-has-children-6").on("click", function () {
    $(".category-mega-menu-6").slideToggle("slow");
  });
  /*-----------------------------  
              Category more toggle  
        -------------------------------*/

  $(".category-menu li.hidden").hide();
  $("#more-btn").on("click", function (e) {
    e.preventDefault();
    $(".category-menu li.hidden").toggle(500);
    var htmlAfter = '<i class="ion-ios-minus-empty" aria-hidden="true"></i> دسته بندی های کمتر';
    var htmlBefore = '<i class="ion-ios-plus-empty" aria-hidden="true"></i> دسته بندی های بیشتر';

    if ($(this).html() == htmlAfter) {
      $(this).html(htmlBefore);
    } else {
      $(this).html(htmlAfter);
    }
  });
  /*---------------------------
        menu-content
    ------------------------------ */

  var $btnMenu = $(".menu-btn");
  var $vmenuContent = $(".vmenu-content");
  $btnMenu.on("click", function (event) {
    $vmenuContent.slideToggle(500);
  });
  $vmenuContent.each(function () {
    var $ul = $(this),
        $lis = $ul.find(".menu-item:gt(7)"),
        isExpanded = $ul.hasClass("expanded");
    $lis[isExpanded ? "show" : "hide"]();

    if ($lis.length > 0) {
      $ul.append($('<li class="expand">' + (isExpanded ? '<a href="javascript:void(0);"><span><i class="ion-android-remove"></i>Close Categories</span></a>' : '<a href="javascript:void(0);"><span><i class="ion-android-add"></i>More Categories</span></a>') + "</li>").on("click", function (event) {
        var isExpanded = $ul.hasClass("expanded");
        event.preventDefault();
        $(this).html(isExpanded ? '<a href="javascript:void(0);"><span><i class="ion-android-add"></i>More Categories</span></a>' : '<a href="javascript:void(0);"><span><i class="ion-android-remove"></i>Close Categories</span></a>');
        $ul.toggleClass("expanded");
        $lis.toggle(300);
      }));
    }
  });

 

})(jquery);