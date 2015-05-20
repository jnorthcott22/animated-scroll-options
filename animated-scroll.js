// Basic Animation Plugin (Requires waypoints.js - https://github.com/imakewebthings/jquery-waypoints)
$.fn.extend({
 wayAnimate: function(options) {
   var defaults = {
     activeClass: 'animate',
     animClass: 'fadeIn',
     animDelay: 250
   };

   options = $.extend(defaults, options);
   return this.each(function() {				
     var $o, $obj;
   
     $o = options;
     $obj = $(this);
     
     $($obj).waypoint(function(event) {
        $($obj).each(function(index) {
          $obj.delay($o.animDelay*(index+1)).queue(function() { $obj.css({visibility: 'visible'}).addClass($o.activeClass+' '+$o.animClass) });
        });
      });
   });
 }
});


// Advanced Animation Plugin (Requires waypoints.js - https://github.com/imakewebthings/jquery-waypoints)
 $.fn.extend({
   advancedAnimate: function(options) {
     var defaults = {
       subItem: 'aside',
     
       activeClass: 'animate',
       animClass: 'fadeIn',
       animDelay: 250,
       
       animClassFirst: 'rotateInDownLeft',
       animClassMid: 'fadeInUp',
       animClassLast: 'rotateInDownRight',
       animDelayInner: 250,
       lastItem: 3
     };
 
     options = $.extend(defaults, options);
     return this.each(function() {				
       var $o, $obj;
     
       $o = options;
       $obj = $(this);
       
       $($obj).waypoint(function(event) {
        $(this).each(function(index) {
          var $this = $(this);
          $this.delay($o.animDelay*(index+1)).queue(function() { $this.css({visibility: 'visible'}) });
        });
        $($o.subItem, $obj).each(function(index) {
          var $this = $(this);
          if (index==0) {
            $this.delay($o.animDelayInner).queue(function() { $this.show().addClass($o.activeClass+' '+$o.animClassFirst) });
          } else {
            if (index==$o.lastItem) {
              $this.delay($o.animDelayInner).queue(function() { $this.show().addClass($o.activeClass+' '+$o.animClassLast) });
            } else {
              $this.delay($o.animDelayInner).queue(function() { $this.show().addClass($o.activeClass+' '+$o.animClassMid) });
            }
          }
        });
      });
      
     });
   }
 });








$(document).ready(function() {

  $.fn.waypoint.defaults = {
    context: window,
    continuous: true,
    enabled: true,
    horizontal: false,
    offset: '85%',
    triggerOnce: false
  }

  $('.step-1').advancedAnimate({ lastItem: 2 });
  $('.step-box').advancedAnimate({ lastItem: 3 });
  

  $('.step-2').wayAnimate({ 'animClass':'fadeInUpBig' });
  $('.step-3').wayAnimate({ 'animClass':'shake' });
  $('.step-4').wayAnimate({ 'animClass':'tada' });
  $('.step-5').wayAnimate({ 'animClass':'swing' });
  $('.step-6').wayAnimate({ 'animClass':'pulse' });
  $('.step-7').wayAnimate({ 'animClass':'flipInX' });
  $('.step-8').wayAnimate({ 'animClass':'flipInY' });
  $('.step-9').wayAnimate({ 'animClass':'fadeIn' });
  $('.step-10').wayAnimate({ 'animClass':'rotateIn' });
  $('.step-11').wayAnimate({ 'animClass':'rotateInUpLeft' });
  $('.step-12').wayAnimate({ 'animClass':'rotateInUpRight' });
  

});