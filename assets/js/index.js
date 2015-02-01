$(function() {
    var act = {
        "title": "昆明开发者 - 2014年度技术分享会",
        "path": "meeting/2014_11_22.html"
    }

    $("title").html(act.title)
    $("#act").load(act.path + " header");
})