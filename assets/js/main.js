
(function () {
    'use strict';
    
    // :: Loading
    $(window).on('load', function () {
        $('.loading').fadeOut();
    });
    
    // :: Scroll Smooth To Go Section
    $('.move-section').on('click', function (e) {
        e.preventDefault();
        var anchorLink = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchorLink.attr('href')).offset().top + 1
        }, 1000);
    });
    
    // :: Add Class Active For ('.nav-bar')
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 350) {
            $('.nav-bar').addClass('active');
        } else {
            $('.nav-bar').removeClass('active');
        }
    });
    
    // :: Add Class Active To Search Box
    $('.open-search-box').on('click', function () {
        $('.search-box').fadeIn();
    });
    $('.search-box, .close-search').on('click', function () {
        $('.search-box').fadeOut();
    });
    $('.search-box form').on('click', function (e) {
        e.stopPropagation();
    });
    
    
    
    // :: Add Class Active On Go To Header
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 400) {
            $('.scroll-up').addClass('active');
        } else {
            $('.scroll-up').removeClass('active');
        }
    });
    
    
    
    // :: Add Class Active To Navbar (.gallery .list-name-gallery li)
    $('.case-study-list .list-name-case li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    // Cache selectors
    var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

    // Bind click handler to menu items
    menuItems.click(function(e){
        var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({ 
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
            return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
            .parent().removeClass("active")
            .end().filter("[href='#"+id+"']").parent().addClass("active");
        }
    });

    /*******************************/
    
    var footMenu = $("#foot_product,#foot_links"),
    footMenuHeight = footMenu.outerHeight()+15,
    // All list items
    footMenuItems = footMenu.find("a")

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    footMenuItems.click(function(e){
        var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-footMenuHeight+1;
        $('html, body').stop().animate({ 
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });    
/*****************************/

}());