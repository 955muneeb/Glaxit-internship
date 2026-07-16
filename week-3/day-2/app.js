
function createCounter() {

  
    let count = 0;

    return {

        increment() {
            count++;
            console.log(`Count: ${count}`);
        },

        decrement() {
            count--;
            console.log(`Count: ${count}`);
        },

        reset() {
            count = 0;
            console.log(`Count Reset: ${count}`);
        },

        getCount() {
            return count;
        }

    };
}

// Create Counter
const counter = createCounter();

// Testing
counter.increment();   // 1
counter.increment();   // 2
counter.increment();   // 3

counter.decrement();   // 2

counter.reset();       // 0

console.log(counter.getCount()); // 0