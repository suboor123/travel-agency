// Import necessary constants and store
import toast from 'react-hot-toast';

// Define a default Notification class
export default class Notification {
    // Static method to handle success notifications
    static success = (message) => {
        if (Array.isArray(message)) {
            // Create a unique toast for each message in the array
            message.forEach((ms) => toast.success(ms, { id: `success-${ms}` }));
        } else {
            toast.success(message);
        }
    };

    // Static method to handle error notifications
    static error = (message) => {
        if (Array.isArray(message)) {
            // Create a unique toast for each message in the array
            message.forEach((ms) => toast.error(ms, { id: `error-${ms}` }));
        } else {
            toast.error(message);
        }
    };
}
