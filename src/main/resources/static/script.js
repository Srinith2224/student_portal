document.addEventListener('DOMContentLoaded', function() {
    // Select the form element
    const form = document.querySelector('form');

// Add event listener for form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Get email and password values from input fields
        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;

        // Validate user input
        if (!email || !password) {
            alert('Please enter both email and password.');
            return;
        }

        try {
            // Send POST request to backend for user authentication
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password}) // Send email and password in JSON format
            });

            // Check if response is successful
            if (!response.ok) {
                throw new Error('Login failed'); // Throw error if login fails
            }

            // Redirect user to dashboard page upon successful login
            window.location.href = '/dashboard';
        } catch (error) {
            console.error('Error:', error.message); // Log error to console
            alert('Login failed. Please try again.'); // Display error message to user
        }
    });
})