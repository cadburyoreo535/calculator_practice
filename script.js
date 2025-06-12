// Calculator JavaScript - Educational Template

// Best practice: Wait for DOM to be fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', () => {
    // ===== DOM Selection Methods =====
    // 
    // There are multiple ways to select DOM elements:
    // - document.getElementById('id')
    // - document.querySelector('.class-name') or ('#id') or ('tag')
    // - document.querySelectorAll() for multiple elements
    //
    // Examples:
    // const displayElement = document.querySelector('.display'); 
    // const allButtons = document.querySelectorAll('button');

    // ===== State Management =====
    //
    // Consider what state your calculator needs to track:
    // - Current input
    // - Previous input
    // - Selected operation
    // - Result

    // ===== Event Listeners =====
    //
    // You can add event listeners in different ways:
    // 1. Select elements and attach listeners:
    //    const button = document.querySelector('.some-button');
    //    button.addEventListener('click', handlerFunction);
    //
    // 2. Use event delegation for multiple similar elements:
    //    document.querySelector('.buttons-grid').addEventListener('click', (event) => {
    //      if (event.target.matches('.number')) {
    //        // Handle number button click
    //      }
    //    });

    // ===== Functions to Consider Implementing =====
    //
    // 1. Display functions
    //    - How will you update the display?
    //    - How will you handle large numbers?
    //
    // 2. Input handlers
    //    - How will you process number input?
    //    - How will you handle decimal points?
    //
    // 3. Operation handlers
    //    - How will you store the current operation?
    //    - How will you handle operation changes?
    //
    // 4. Calculation logic
    //    - How will you perform calculations?
    //    - How will you handle errors like division by zero?

    // ===== Implementation Tips =====
    //
    // - Break down the problem into smaller functions
    // - Use clear, descriptive variable and function names
    // - Consider edge cases (e.g., pressing equals without an operation)
    // - Use console.log for debugging
    // - Consider using helper functions for repeated tasks

    // ===== Example Event Listener Structure =====
    //
    // This is just a conceptual example:
    /*
    // Example: Adding click handlers to number buttons
    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', () => {
            // What should happen when a number is clicked?
            // How will you update the display?
            // How will you handle concatenating numbers?
        });
    });
    
    // Example: Adding click handlers to operator buttons
    document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', () => {
            // What should happen when an operator is clicked?
            // How will you store the first operand?
            // How will you display the selected operator?
        });
    });
    */

    // ===== Getting Started =====
    //
    // 1. Start by selecting your DOM elements
    // 2. Create event listeners for the buttons
    // 3. Implement basic number input functionality
    // 4. Add operation selection
    // 5. Implement calculation logic
    // 6. Add clear and delete functionality
    // 7. Test thoroughly and handle edge cases

    console.log('Calculator script loaded!');
});