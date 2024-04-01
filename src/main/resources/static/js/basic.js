$(function(){   

    // $(window).on('resize',function(){		
    //     if( window.innerWidth > 1000 ){		
    //         location.reload();       
    //     }
	// });

	/* header fix*/
	$(document).on("scroll", function () {
		if ($(document).scrollTop() > 0) {
            $("header").addClass("on");		
            // $("body#login").addClass("on");
        }
        else {
            $("header").removeClass("on");	
            // $("body#login").removeClass("on");	 
        }		
	}); 

    /*Mobile nav*/
	var nav_btn = function(){
		var $navBtn = $('.gnb-all-btn'),
			$navBg = $('.nav-all_bg'),
			$nav = $('.nav-all');
			var toggleNav = function () {
			$navBg.fadeToggle(350,"linear");
			$nav.toggleClass('active');
		};
		$navBtn.on('click', function () {
			toggleNav();
			$('body').toggleClass('scrolloff')
		});
		$navBg.on('click', function () {
			toggleNav();
			$('body').removeClass('scrolloff')
		});
	};	
	nav_btn();    

    /*sub nav*/
	var  breadCumnav = function(){
		var $breadCumdown = $('.breadcumb-dropdown .breadcumb_item'),
			$breadCumbtn = $('.breadcumb_button'),
			$breadCumnlist = $('.breadcumb_drawer');

		$breadCumdown.each(function(){
			$(this).find($breadCumbtn).click(function(){
				if ($(this).hasClass('on') == true) {
					$(this).removeClass('on');
					$(this).next().stop(false, true).slideUp(200);								
				} else {
					$breadCumnlist.stop(false, true).hide();
					$breadCumbtn.removeClass('on');
					$(this).next().stop(false, true).slideDown(100);
					$(this).addClass('on');
					$('.family-list').hide();
					$('.family').removeClass('active');						
				}
				return false;
			});
		});
	};
	breadCumnav();

   /* subNav scroll */
	$(window).on('scroll', function(){
		subBreadcumbScroll();
	});	
    $(window).on('resize',function(){		
        if( window.innerWidth > 1000 ){		
            // location.reload();      
		}
	});

    function subBreadcumbScroll(){
		var $breadCumnav = $('.bread-cumb-sticky'),
		$breadCumwr = $('.bread-cumb-sticky .breadcumb_wrap');
		if ($breadCumnav.length > 0) {
			var $breadCumNavOffset = $breadCumnav.offset(),
				$headerOuter =  $('header').outerHeight(),
				$winOuterwidth = $(window).outerWidth(),
			// $breadCumtop =$breadCumNavOffset.top;
			$breadCumtop = $breadCumNavOffset.top - $('header').outerHeight(); 
			// console.log($breadCumtop)
			if ($winOuterwidth > 980) {
				if ($(window).scrollTop() > $breadCumtop) {
					$breadCumnav.addClass('fix');					
					$breadCumwr.animate({top:$headerOuter},0 ); 
					} else {
						$breadCumnav.removeClass('fix');
						$breadCumwr.animate({top:0},0 ); 
					}
			}else {
				if ($(window).scrollTop() > $breadCumtop) {
					$breadCumnav.addClass('fix');
				} else {
					$breadCumnav.removeClass('fix');
				}
			}
		}					
	}
    
    /*nav length culcalate  */    
    var conWidth = $('.breadcumb_item-inner');
    var swiperNum = $('.breadcumbr_Swiper .swiper-slide');
    var listCont = $('.breadcumb-dropdown .breadcumb_item.last-depth');        
    if(swiperNum.length === 2){
        conWidth.addClass('on');       
        listCont.addClass('bordernone');                
        if( window.innerWidth > 1000 ){		
            listCont.removeClass('bordernone');      
        }    
    }else{
        conWidth.removeClass('on');
        listCont.removeClass('bordernone');     
    }       
    
    /*select- dropdown */
	var drop_select = function(){
		var $dropSelect = $('.dropdown_item'),
			$dropSelectbtn = $('.dropdown_button'),
			$dropSelectlist = $('.dropdown_drawer');	

			$dropSelect.find($dropSelectbtn).click(function () {
				if ($(this).hasClass('on') == true) {
					$(this).removeClass('on');
					$(this).next().stop(false, true).slideUp(200);					
				} else {
					$dropSelectlist.stop(false, true).hide();
					$dropSelectbtn.removeClass('on');
					$(this).next().stop(false, true).slideDown(100);
					$(this).addClass('on');
					$('.family-list').hide();
					$('.family').removeClass('active');
				}
				return false;
			});    
	};
	drop_select(); 

	/*Faq*/
    var faq_Accodian = function () {
        var $faq1 = $('.quest-1'),
            $faq2_list = $('.answer-bx');            
    
        $faq1.children('.quest-box').click(function () {
            if ($(this).next().length > 0) {
                if ($(this).next().css('display') === 'none') {                       
                    $faq1.children('.quest-box').removeClass('active');
                    $(this).addClass('active');                      
                    $faq2_list.slideUp(300);
                    $(this).next().stop(false, true).slideDown(300);
                } else {                    
                    $(this).next().slideUp(200);
                    $faq1.children('.quest-box').removeClass('active');
                }
                return false;
            } else {
            }
        });   
    };
    faq_Accodian();      
	

    //Modal pop 닫기
    $(".close-btn, .btn-pop-close").on('click',function(){
        // $(".modal-dim").fadeOut(0);
        $(".modal-popup").fadeOut(0);
        $(".modal-popup").removeClass('show');
        $('body').removeClass('scrolloff')
    });
    $(".modal-content").on("click", function(e){  
        console.log("pop유지");  
        e.stopImmediatePropagation();  
        //e.stopPropagation();       
    });

    $('.btTop-mobile').hide();
    $(document).scroll(function () {  
        if ($(document).scrollTop() > 150) {      
            $('.btTop-mobile').fadeIn();   
        } else if ($(document).scrollTop() == $(document).height() - $(window).height()) {
            $('.btTop-mobile').fadeIn()
        } else {
            $('.btTop-mobile').fadeOut()
        }
    });
    $('.btTop-mobile').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });
        
});

/*모달 POPUP*/
function openModal(modalname){
    document.get
    $(".modal-dim").show(0);
    $("#"+ modalname).show(0);
    $("#"+ modalname).addClass('show');
    $('body').addClass('scrolloff');
}

function showpop(modalname1){
	$(".modal-dim").show(0);
    $("#"+ modalname1).show(0);	
	$("#"+ modalname1).addClass('show');
	$('body').addClass('scrolloff');
}


