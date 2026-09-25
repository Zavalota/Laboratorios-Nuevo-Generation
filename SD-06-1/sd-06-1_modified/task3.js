// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    this.printMail = function() {
      console.log(this.subject + ": " + this.message);
  };
  }
  
let userSubject = process.argv[3];
let userMessage = process.argv[4];
const newMail = new Mail(userSubject, userMessage);
  
  // Type your code above this line!
  
  newMail.printMail()