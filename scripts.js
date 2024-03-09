var timeoutIds = []; 

document.getElementById("clickme").addEventListener("click", function() {
    timeoutIds.forEach(function(id) {
        clearTimeout(id);
    });
    timeoutIds = [];

    var paragraphContent = "I'm excited to share a part of my journey with you. Whether you're here for a quick read or to explore more, I hope you find something enjoyable. Feel free to stay, connect, and enjoy the stories on these pages. Welcome to a place filled with not only my adventures but also the joy of connecting with like-minded souls!";

    var characters = paragraphContent.split('');

    var dynamicParagraph = document.getElementById("dynamicParagraph");

    dynamicParagraph.innerHTML = ''; 

    characters.forEach(function(char, index) {
        var timeoutId = setTimeout(function() {
            dynamicParagraph.innerHTML += char;

            if (index === characters.length - 1) {
                dynamicParagraph.innerHTML += '<br>';
            }
        }, 50 * index);

        timeoutIds.push(timeoutId);
    });
});
document.getElementById('changebg').addEventListener('click', function() {

    var hcElement = document.querySelector('.info h1');
    var nameElement = document.querySelector('.info h2');
 
    var newColor = getRandomColor();
    hcElement.style.color = newColor;
    nameElement.style.color = newColor;
  });
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
