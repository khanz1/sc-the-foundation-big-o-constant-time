const users = new Map<string, string>();
users.set("assistance.xavier", "To Infinity and Beyond!");
users.set("assistance.khanz", "Remember, Sky is the limit!");

console.log(users.get("assistance.xavier")); // To Infinity and Beyond!
console.log(users.get("assistance.khanz")); // Remember, Sky is the limit!
console.log(users.get("assistance.zakhaev")); // undefined