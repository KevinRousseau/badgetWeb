!function n(t,o,r){function e(a,u){if(!o[a]){if(!t[a]){var f="function"==typeof require&&require;if(!u&&f)return f(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var s=o[a]={exports:{}};t[a][0].call(s.exports,function(n){var o=t[a][1][n];return e(o?o:n)},s,s.exports,n,t,o,r)}return o[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)e(r[a]);return e}({1:[function(n,t,o){!function(){function n(){a(),e(),r($(".carousel")),r($(".carousel-footer")),o(),t()}function t(){var n=$("iframe"),o=n.width(),r=o/16*9;n.height(r),$(window).resize(function(){t()})}function o(){$("button").addClass("hidden")}function r(n){n.slick({lazyLoad:"ondemand",slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3})}function e(){var n=u.select("#wolken_1"),t=n.getBBox(),o=f.select("#wolken_2"),r=o.getBBox();i(n,t),i(o,r)}function i(n,t){n.transform("t200, 0"),n.removeClass("hidden"),n.animate({transform:"t4000,0"},2e5,function(){e.attr({transform:"position(0 "+t.x+" "+t.y+")"}),e()})}function a(){var n=u.select("#rad"),t=n.getBBox();n.animate({transform:"r360,"+t.cx+","+t.cy},2e4,function(){n.attr({transform:"rotate(0 "+t.cx+" "+t.cy+")"}),a()})}var u=Snap(".intro-svg"),f=Snap(".outro-svg");n()}()},{}]},{},[1]);
//# sourceMappingURL=app.js.map