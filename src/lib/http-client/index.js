import Notification from '../notification';

export default class HttpClient {
    // Static method to handle errors
    static handleErrors(e) {
        // Display error message using Notification module
        Notification.error(e.message || JSON.stringify(e));
    }

    // Static method for GET requests
    static async get(url) {
        try {
            // Perform fetch request
            const response = await fetch(url);
            // Parse response as JSON
            const data = await response.json();
            return data;
        } catch (e) {
            // Handle errors using the error handler
            this.handleErrors(e);
            return null;
        }
    }

    // Static method for POST requests
    static async post(url, options = {}) {
        // Default request options for POST, can be overridden by 'options' parameter
        const requestOptions = {
            method: 'POST',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
            },
            ...options,
        };

        try {
            // Perform fetch request with requestOptions
            const response = await fetch(url, requestOptions);
            // Parse response as JSON
            const data = await response.json();
            return data;
        } catch (e) {
            // Handle errors using the error handler
            this.handleErrors(e);
            return null;
        }
    }
}
