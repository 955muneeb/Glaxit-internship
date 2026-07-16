

import users from "./users.js";


const activeUsers = users.filter((user) => user.active);

console.log("Active Users:");
console.log(activeUsers);



const activeUserNames = activeUsers.map((user) => user.name);

console.log("\nActive User Names:");
console.log(activeUserNames);



const totalAdmins = users.reduce((count, user) => {
  return user.role === "Admin" ? count + 1 : count;
}, 0);

console.log("\nTotal Admins:");
console.log(totalAdmins);



console.log("\nAll Users:");

users.forEach((user, index) => {
  console.log(
    `${index + 1}. ${user.name} | Role: ${user.role} | Active: ${user.active}`
  );
});