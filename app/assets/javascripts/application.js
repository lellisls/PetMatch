// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require bootstrap-material-design
//= require holder
//= require_tree .

var setTooltip = function (elm, placement, text) {
    elm.attr('rel','tooltip');
    elm.attr('data-placement',placement);
    elm.attr('data-toggle','tooltip');
    elm.attr('title','');
    elm.attr('data-original-title',text);
    elm.tooltip();
}

var sendMessage = function(message, icon) {
    if(message){
        if( icon ) {
            message = '<i class="' + icon + '"> </i> ' + message;
        }
        $('#alert').html(message);
        $('#alert').fadeIn();
        $("#alert").delay(2000).fadeOut("slow", function () { $(this).hide(); });
    }
}

var inicializar = function() {
    $.material.init();
}
