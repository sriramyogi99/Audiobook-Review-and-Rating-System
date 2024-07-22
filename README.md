# Audiobook Review and Rating System

**Description:**

A web application allowing users to explore audiobooks, provide reviews and ratings.

**Technologies:**

* **Frontend:** React, JavaScript, CSS
* **Backend:** Node.js, Express, MongoDB

**Installation:**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sriramyogi99/Audiobook-Review-and-Rating-System.git
2. **Navigate to project directory:**
   ```bash
   cd Audiobook-Review-and-Rating-System
3. **Install dependencies:**
   ```bash
    cd client
    npm install
    cd ../server
    npm install
4. **Set up environment variables:**
  Update the .env file under the server folder of your project and add the following:
    ```bash
    MONGO_URI=your_mongodb_connection_string
    ```
    Replace `your_mongodb_connection_string` with your actual MongoDB connection URI.
  
5. **Running the application:**
   * Open two separate command prompts or terminal windows.
   * In the first terminal, navigate to the client directory and run:
       ```bash
       cd client
       npm start
       ```
   * In the second terminal, navigate to the server directory:
       ```bash
       cd server
       npm run start-all
       ```

**Getting Started:**

* Once both servers are running, you can access the application in your browser at http://localhost:3000 (or the specified port in the `PORT` variable inside `.env` file.).

**Live Demo:**
[Video] (https://youtu.be/Q1_4W05pVeA)
