/**
 * Created by Ramkumar on 02-02-2017.
 */

(function() {

// JSON Contains Image URLs 
var data = {
    "images": [
        {"url":"images/imgg1 (1).png"},
        {"url": "images/imgg1 (2).png"},
        {"url": "images/imgg1 (3).png"},
        {"url": "images/imgg1 (4).png"},
        {"url": "images/imgg1 (5).png"},
        {"url": "images/imgg1 (6).png"},
        {"url": "images/imgg1 (8).png"},
        {"url": "images/imgg1 (7).png"},
        {"url": "images/imgg1 (9).png"},
        {"url": "images/imgg1 (10).png"},
        {"url": "images/imgg1 (11).png"},
        {"url": "images/imgg1 (12).png"}
    ]
};


// invoking load() for creating a grid 
window.onload = load();

// images will be loaded into div based on the URLs present in JSON
function load() {

    // get reference of container waiting in HTML file
    var mainContainer = document.getElementById("main-container");

    data.images.forEach(function (items) {

        // create div element which will hold each image
        var innerDiv = document.createElement('div');
        innerDiv.className = 'inline-container';

        // create image that goes inside <div> element
        var image = document.createElement('img');
        image.src = items.url;

        // insert image into div
        innerDiv.appendChild(image);

        // insert div into main
        mainContainer.appendChild(innerDiv);
    });

}

var dragSrcEl = null;

function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    dragSrcEl = this;
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function drop(e) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
}

var cols = document.querySelectorAll('#main-container .inline-container');
[].forEach.call(cols, function (col) {
    col.addEventListener('dragstart', drag, false);
    col.addEventListener('dragover', allowDrop, false);
    col.addEventListener('drop', drop, false);
});

})();