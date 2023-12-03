-------------------------------------------------------------
Ecommerce - Node
-------------------------------------------------------------

Overview :
This Node.js project serves as the backend for an e-commerce application, providing a robust set of APIs to support various functionalities.

-------------------------------------------------------------

Technologies Used : 
- Node.js
- MongoDB for data storage
- Express.js for API routing

-------------------------------------------------------------


Prerequisites :
Make sure you have the following installed:
- Node.js
- MongoDB

-------------------------------------------------------------
Features
- Product Management: Add, update, and retrieve product details.
- User Authentication: Secure user authentication for a personalized shopping experience.
- Order Processing: Handle order creation, tracking, and management.
- Cart Functionality: Allow users to add/remove items from their shopping cart.
- Category Management: Organize products into categories for easy navigation.

-------------------------------------------------------------

Getting Started :

1. In terminal add this cmd "git clone https://github.com/Mrks916/Ecommerce.git" to clone project.

2. Install dependencies using cmd "npm i".

3. Set up MongoDB:
    - Ensure MongoDB is running locally or update connection strings accordingly.
    - In .env file paste your connection string in place of MONGODB_URI variable.

4. Run the project:
   - Run cmd "cd src" in vs code terminal.
   - Run cmd "node Index.js".
   - In mongo db your database with data collections are auto created using schemas 
   - Import master database collections from Database folder in Mongo Db. 
   - Open your browser and go to http://localhost:8000.
   - run swagger Api collection on this url http://localhost:8000/api-docs.
  
5. Live project link
   - Try out this postman collection to test apis on liver server
   - Postman Collection : https://documenter.getpostman.com/view/31560668/2s9YeK4qP5
