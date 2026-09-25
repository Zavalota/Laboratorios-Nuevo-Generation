function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    
  }
  
  // Type your code below this line!
  
let userSubject = process.argv[3];
let userMessage = process.argv[4];
const newMail = new Mail(userSubject, userMessage);
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)