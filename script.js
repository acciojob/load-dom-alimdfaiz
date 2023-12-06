  function onDOMLoad() {
            // Get the body element
            var bodyElement = document.body;

            // Create a new paragraph element
            var paragraph = document.createElement("p");

            // Set the text content of the paragraph
            paragraph.textContent = "DOM load success";

            // Append the paragraph to the body
            bodyElement.appendChild(paragraph);
        }
document.addEventListener("DOMContentLoaded", onDOMLoad);