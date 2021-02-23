function listOfNames(People) {
  let content = document.querySelector("#content");
  People.forEach(person => {
    let nameTag = document.createElement('h1')
    let jobTag = document.createElement('h2')
    nameTag.innerHTML = person.name
    jobTag.innerHTML = person.job
    content.appendChild(nameTag)
    content.appendChild(jobTag)
  })
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
