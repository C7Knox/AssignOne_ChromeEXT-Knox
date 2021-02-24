console.log("Extension is running! :)");


// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Hello!";

// 2. Append somewhere
var bod = document.getElementsByTagName("body")[0];
bod.appendChild(button);

// 3. Add event handler
//var james = document.getElementsByTagName("body")[0];
button.addEventListener ("click", function() {
    alert("I hope you enjoy the colourfoul abyss!");
    //james.css("filter", "saturation(20%)");//here I wanted to make it so everytime the button was clicked it would change the filter aspect, but i couldn't get a way to call it that worked
});

//was trying to create a range slider to let users change teh saturation%, but I could not figure out how to add in the container through javascript without an index.html file
//var $div=document.createElement("div"); 
//document.body.appendChild($div); 
//$div.addClass("slidecontainer");
//$div.innerText("<input type="range" min="1" max="100" value="50" class="slider" id="myRange">");




//Credit\\
//slider
//https://stackoverflow.com/questions/19103183/how-to-insert-html-with-a-chrome-extension
//button
//https://codepen.io/davidcochran/pen/WbWXoa