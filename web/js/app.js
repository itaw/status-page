/**
 * ITAW Status Page
 * 
 * app.js
 * 
 * @author Florian Weber <florian.weber.dd@icloud.com>
 */

$(document).ready(function () {

    var currentPage = $('#current-page').html();

    $('#nl-' + currentPage).addClass('active');

});