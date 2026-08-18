import fs from 'fs/promises';
import path from 'path';

// Get the absolute path to our JSON file (good practice to avoid pathing errors)
const filePath = path.resolve('users.json');

async function manageUsers() {
    try {
        console.log("1. Reading file...");
        // Read the file. It returns a Buffer, so we specify 'utf-8' to get text
        const fileData = await fs.readFile(filePath, 'utf-8');
        
        console.log("2. Parsing data...");
        // Convert the JSON text into a JavaScript array
        const users = JSON.parse(fileData);
        
        console.log("3. Adding new user...");
        // Create a mock user and push it to the array
        const newUser = { id: 3, name: "Usman", role: "Moderator" };
        users.push(newUser);
        
        console.log("4. Writing back to file...");
        // Convert the JS array back to a formatted JSON string (the 'null, 2' adds nice indentation)
        await fs.writeFile(filePath, JSON.stringify(users, null, 2));
        
        console.log("✅ Success! Check users.json to see the new user.");
        
    } catch (error) {
        console.error("❌ An error occurred:", error);
    }
}

// Run the function
manageUsers();