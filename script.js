// Function to change text content of the heading dynamically
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.querySelector('h1').textContent = "Text has been changed!";
});

// Function to change the style of the body when button is clicked
document.getElementById('changeStyleButton').addEventListener('click', function() {
    document.body.style.backgroundColor = "#f0f8ff";  // Change background color
    document.body.style.color = "#333";  // Change text color
    document.body.style.fontFamily = "Arial, sans-serif";  // Change font
});

// Function to add a new element (paragraph) when the button is clicked
document.getElementById('addElementButton').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = "This is a dynamically added paragraph!";
    document.getElementById('new-element-container').appendChild(newElement);
});

// Function to remove the last added element when the button is clicked
document.getElementById('removeElementButton').addEventListener('click', function() {
    const container = document.getElementById('new-element-container');
    if (container.children.length > 0) {
        container.removeChild(container.lastElementChild);
    }
});
