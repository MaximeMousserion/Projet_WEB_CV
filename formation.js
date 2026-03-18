function formation(Id){
    var image;

    if (Id=="etude"){
        image="ensibs.jpg"
    }

    if (Id=="lycee"){
        image="livet.jpg"
    }
    
    if (Id=="college"){
        image="pompidou.jpg"
    }
    document.getElementById("monImage").src=image
}