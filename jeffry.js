class Person {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }

    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Job: ${this.job}`; // Use backticks and proper interpolation
    }

    // Method to update job
    setJob(newJob) {
        this.job = newJob;
    }
}

// Instantiate and interact with the object
let person1 = new Person("Jeffry", 21, "Front-End Developer");
console.log(person1.getInfo()); // 

// Update the job
person1.setJob("Senior Developer");
console.log(person1.getInfo()); // 
