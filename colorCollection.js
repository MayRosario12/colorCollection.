// Create an array to store the user's favorite colors
var favoriteColors = [Yellow];

// Function to collect colors from the user
function collectColors() {
    // Loop to get three colors from the user
    for (var i = 0; i < 3; i++) {
        // Prompt the user for a color
        var color = prompt("yellow:");

        // If the user cancels the prompt
        if (color === null) {
            console.log("Input canceled.");
            return; // Exit the function if the user cancels
        }

        // Add the color to the array
        favoriteColors.push("yellow", "black");

        // Log the updated array of colors to the console
        console.log("yellow:", favoriteColors);
    }

    // Final message showing all favorite colors
    console.log("Yellow:", favoriteColors);
}

// Calling the function to start collecting colors
collectColors();