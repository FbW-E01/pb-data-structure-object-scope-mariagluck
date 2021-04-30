
// 2. Create a method that prints the following: 
// ```javascript
// "John smith is a student in class 12"
// ```

const student = {
    firstName: "John", 
    lastName: "Smith", 
    class: 12,
    
};

function studentInfo() {
    console.log(`${this.firstName} ${this.lastName} is a student in class ${this.class}`);

}

student.studentInfo = studentInfo;
student.studentInfo(); 
//ANSWER: it prints: John Smith is a student in class 12



// 3. Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".

const person = {
    firstName: "John",
    lastName: "Smith",
    age: 41,
    job: "engineer",
    city: "France",
};

function info() {
    console.log(`${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} living in ${this.city}`);

}

person.info = info;
person.info(); 

//ANSWER: it prints: John Smith is a 41 years old engineer living in France;

// ## Bonus

// 3. Write a method to get the length of the person object.

const getObjectLength = Object.keys(person).length; 

console.log(getObjectLength); // ANSWER: It prints 6 as the length of the object person