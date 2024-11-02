// Define a default Observer class
export default class Observer {
    // Private fields to hold observers and the subject state
    #observers = [];
    #subject = {};

    // Constructor to initialize the Observer with an initial value for the subject
    constructor(initialVal) {
        this.#subject = initialVal;
    }

    // Method to subscribe to the Observer
    subscribe(callback) {
        // Create an observer object with a unique key and an unsubscribe method
        const observer = {
            callback,
            key: Symbol(),
            unsubscribe: () => this.#unsubscribe(observer.key),
        };

        // Add the observer to the list of observers
        this.#observers.push(observer);

        // Immediately invoke the callback with the current state
        callback(this.#subject);

        // Return an object containing the unsubscribe method
        return { unsubscribe: observer.unsubscribe };
    }

    // Private method to unsubscribe an observer based on its unique key
    #unsubscribe(key) {
        this.#observers = this.#observers.filter((observer) => observer.key !== key);
    }

    // Private method to notify all observers of a state change
    #notify() {
        this.#observers.forEach((observer) => observer.callback(this.#subject));
    }

    // Method to dispatch updates to the subject state and notify observers
    dispatch(newVal) {
        // Update the subject state
        this.#subject = { ...this.#subject, ...newVal };

        // Notify all observers of the state change
        this.#notify();
    }

    // Method to get a specific value from the subject state
    get(key) {
        return this.#subject[key];
    }
}
