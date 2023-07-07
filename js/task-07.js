const inputRef = document.getElementById("font-size-control");
const textRef = document.getElementById("text");
inputRef.value = "16";

// console.dir(inputRef);
inputRef.addEventListener("input", function () {
   
    textRef.style.fontSize = inputRef.value  + "px";
});