if ($('.page-wrapper').length > 0) {

$(function() {
  $("#menu").metisMenu();
  $(".main-content").css('min-height',$(window).height() -  60)
  $('.slim-scroll').slimScroll({    
    height: "auto"
  });

  $(window).resize(function() {
    $(".main-content").css('min-height',$(window).height() - 60)
    $('.slim-scroll').slimScroll({    
      height: "auto"
    });
  });


  /*menu toggle*/
  $(".open-close").on('click', function() {
    if ($(".container-page").hasClass("content-wrapper")) {
      $(".container-page").trigger("resize");
      $(".container-page").removeClass("content-wrapper");
      $(".sidebar-nav, .slimScrollDiv").css("overflow", "hidden").parent().css("overflow", "visible");
      $(".open-close i").removeClass("icon-arrow-left-circle");
      $(".main-header").removeClass("small-width");
      $(".site-logo").removeClass("small-width-size");
      $("main").removeClass("small-width");
      $(".big-logo").show();
      $(".small-logo").hide();
      $(".logo span").show();
      setTimeout(function() {
        window.dispatchEvent(new Event('resize'));
      }, 200);
    } else {
      $(".container-page").trigger("resize");
      $(".container-page").addClass("content-wrapper");
      $(".sidebar-nav, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible");
      $(".open-close i").removeClass("icon-arrow-left-circle");
      $(".site-logo").addClass("small-width-size");
      $(".main-header").addClass("small-width");
      $("main").addClass("small-width");
      $(".big-logo").hide();
      $(".small-logo").show();
      $(".logo span").hide();
      setTimeout(function() {
        window.dispatchEvent(new Event('resize'));
      }, 200);
    }
  });
  /*end menu toggle~*/
});
}
// ***** New 
if ($('.sidebar').length > 0) {
  
  $(function () {
    // add class to sidebar to collapse
    $(".open-close").click(function () {
      $(".sidebar").toggleClass("my_nav");
    
  });
  // show menu in small screen
    $(".openmenu").click(function () {
        $(".page-wrapper").toggleClass("showmenu");
    });
    // search in small screen
    $('.SMC').click(function(){
$('.search-input').toggle();
    });

})
}

// data table

if ($('.data-table').length > 0) {
  $(function() {
    $('#example,#example-1').DataTable(
      
    );
} );

}







if ($('.sidebar').length > 0) {
  $( ".sidebar" ).hover(function() {

    $(this).parents('.content-wrapper').addClass('Hover-side-bar');
  
  }
  , function(){
      $(this).parents('.content-wrapper').removeClass('Hover-side-bar');
  
  }
  ); 
}
if ($('.remove-item').length > 0) {
   //swal("هل انت متاكد من الحذف ؟", "...and here's the text!");
   function sweetlert(){
    swal({
  title: " هل انت متاكد من الحدف ؟",
  text: "لن تتمكن من استعادة هذا الملف  مرة اخرى !",
  icon: "warning",
  //buttons: true,
  // dangerMode: true,
    buttons: ["الغاء", "حذف"],


})
.then((willDelete) => {
  if (willDelete) {
    swal("تم الحذف بنجاح", {
      icon: "success",
    });
  } else {
   // swal("Your imaginary file is safe!");
   swal("لم يتم الحذف", {
      icon: "error",
    });
  }
});
  }
  
// }
}











// dark & light

function getTheme() {
  return localStorage.getItem('theme') || 'light';
  }
  function saveTheme(theme) {
  localStorage.setItem('theme', theme);
  }
  
  const colorScheme = document.querySelector('meta[name="color-scheme"]');
  function applyTheme(theme) {
  document.body.className = theme;
   colorScheme.content = theme;
  }
  
  function rotateTheme(theme) {
  if (theme === 'light') {
  return 'dark'
  }
  return 'light';
  }
  
  const themeDisplay = document.getElementById('theme');
  const themeToggler = document.getElementById('theme-toggle');
  
  // Mimic heavy load done by other JS scripts
  setTimeout(() => {
  let theme = getTheme();
  applyTheme(theme);
  themeDisplay.innerText = theme;
  
  themeToggler.onclick = () => {
  const newTheme = rotateTheme(theme);
  applyTheme(newTheme);
  themeDisplay.innerText = newTheme;
  saveTheme(newTheme);
  
  theme = newTheme;
  }
  }, 0);
  

 





if ($('.sidebar').length > 0) {
  $(".metismenu a:contains('" + $("title").text().trim() + "')").addClass(' active-link link')
          .parents('.my-second-level').addClass('in').attr('aria-expanded', true).parent( ).addClass("active").find('.has-arrow.link').addClass("active-link")
          .attr('aria-expanded', true).parents("ul").addClass("in").attr('aria-expanded', true).parents("li").addClass("active").find("a").first().addClass("active-link");
}  
  