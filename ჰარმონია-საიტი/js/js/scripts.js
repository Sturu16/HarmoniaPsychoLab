$(document).ready(function(){
    $(".invisible-content").hide();
    $(document).on('click', "#btn",
    function(){
        var moreLessButton=$(".invisible-content").is(":visible")? 'წაიკითხე მეტი':'კითხვის დასრულება';
        $(this).text(moreLessButton);
        $(this).parent(".box").find(".invisible-content").toggle(); 
        $(this).parent(".box").find(".visible-content").toggle(); 
    });
});




