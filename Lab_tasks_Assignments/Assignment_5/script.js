const users = [
  {
    name: "Alice",
    courses: ["Math", "Science", "English"],
  },
  {
    name: "Bob",
    courses: ["Math", "Art"],
  },
  {
    name: "Charlie",
    courses: ["Science", "Math", "History"],
  },
  {
    name: "David",
    courses: ["Math", "Art"],
  },
  {
    name: "eve",
    courses: ["Art", "Science"],
  },
];


// count how many users are enrolled in each course using only forloops
const courseCount = {};

for (let i = 0; i < users.length; i++) {
    const courses = users[i].courses;
    for (let j = 0; j < courses.length; j++) {
        const course = courses[j];
        if (courseCount[course]) {
            courseCount[course]++;
        } else {
            courseCount[course] = 1;
        }
    }
}

console.log(courseCount);