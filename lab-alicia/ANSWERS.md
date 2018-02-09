## ANSWERS

# Question 1: Explain how hoisting allows the printGreeting function to be called before where it's actually written in the file.

printGreeting();

function printGreeting() {
  console.log("isn't JavaScript wonderful?");
}

# ANSWER: printGreeting() is put into memory before it executes any code segment allowing the function to be declared before we declare it in the code below. Also referred to as compiling.

# QUESTION 2: Explain why this function called printGoodbye can't be executed until after it's actually written in the file.

printGoodbye(); // this one won't execute!

const printGreeting = () => {
  console.log("That's all, folks!");
}

printGoodbye();

# ANSWER: Javascript can only hoist devlarations, not initializations. Using a variable that is declared and initialized after using it will equal undefined.