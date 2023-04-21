function reload_page() {
    window.location.reload(true);
};

function myMove() {
    document.getElementById("text").innerHTML = "<p><button id='button' onclick='reload_page()'>FEEL OLD YET?</button></p>";
    var butt = document.getElementById("button");
    butt.remove();
    var elem = document.getElementById("animate");   
    var xpos = 1;
    var ypos = 2;
    var xxpos = 0;
    var yypos = 0;
    var colorArray = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood",
    "CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen",
    "DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
    "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite",
    "Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon",
    "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue",
    "LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple",
    "MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
    "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum",
    "PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue",
    "SlateGray","Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"]
    elem.style.color = "white";
    elem.style.borderColor = "white";
    var id = setInterval(frame, 10);

    function frame() {
        var randomIndex = Math.floor(Math.random() * colorArray.length * 0.99); 
        var color = colorArray[randomIndex];
        if (xxpos <= -5) {
        xpos = 1;
        elem.style.color = color;
        elem.style.borderColor = color;
        } else if (xxpos >= 345) {
        xpos = -1;
        elem.style.color = color;
        elem.style.borderColor = color;
        } else if (yypos <= -5) {
        ypos = 2;
        elem.style.color = color;
        elem.style.borderColor = color;
        } else if (yypos >= 515) {
        ypos = -2;
        elem.style.color = color;
        elem.style.borderColor = color;
        }
        xxpos += xpos;
        yypos += ypos;
        elem.style.top = xxpos + "px"; 
        elem.style.left = yypos + "px"; 
    };    
};