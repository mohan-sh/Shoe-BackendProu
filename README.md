# 🛍️ Shoe Shop - Full Stack MERN Application

A complete full-stack web application for a shoe shop built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring image upload functionality.

## 🚀 Features

- **Home Page**: Beautiful landing page with hero section and features
- **Products Page**: Display all shoes with search functionality
- **Add Product**: Form to add new shoes with image upload
- **Contact Page**: Contact information and form
- **Image Upload**: Multer middleware for handling file uploads
- **Responsive Design**: Modern, mobile-friendly UI
- **Search**: Filter products by name
- **CRUD Operations**: Full product management

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Multer** - File upload middleware
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **CSS3** - Styling with modern features

## 📁 Project Structure

```
Prou/
├── backend/
│   ├── config/
│   │   └── db.js                # MongoDB connection
│   ├── controllers/
│   │   └── productController.js # CRUD operations
│   ├── middleware/
│   │   └── upload.js            # Multer configuration
│   ├── models/
│   │   └── productModel.js      # Mongoose schema
│   ├── routes/
│   │   └── productRoutes.js     # Express routes
│   ├── uploads/                 # Uploaded images folder
│   ├── .env                     # Environment variables
│   ├── package.json
│   └── server.js                # Main server file
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   └── ProductCard.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Products.jsx
    │   │   ├── AddProduct.jsx
    │   │   └── Contact.jsx
    │   ├── api/
    │   │   └── productApi.js     # API service
    │   ├── App.js
    │   └── App.css
    ├── .env                      # Frontend environment
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Prou
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Configuration**

   **Backend (.env)**
   ```env
   MONGO_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/shoeshop?retryWrites=true&w=majority
   PORT=5000
   ```

   **Frontend (.env)**
   ```env
   REACT_APP_BACKEND_URL=http://localhost:5000
   ```

### 🗄️ Database Setup

1. Create a MongoDB Atlas account at [mongodb.com](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string
4. Update the `MONGO_URI` in `backend/.env`

### 🏃‍♂️ Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   ```
   Server will run on `http://localhost:5000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm start
   ```
   App will run on `http://localhost:3000`

## 📱 Usage

1. **Home Page**: Visit the landing page to see the shop introduction
2. **Products**: Browse all available shoes with search functionality
3. **Add Product**: Use the form to add new shoes with image upload
4. **Contact**: View contact information and send messages

## 🔧 API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

## 🎨 Features in Detail

### Image Upload
- Images are stored in the `backend/uploads/` folder
- File validation ensures only images are uploaded
- 5MB file size limit
- Unique filenames to prevent conflicts

### Search Functionality
- Real-time search as you type
- Case-insensitive matching
- Searches product names only

### Responsive Design
- Mobile-first approach
- Modern gradient designs
- Smooth animations and transitions
- Card-based layout for products

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check your connection string in `.env`
   - Ensure your IP is whitelisted in MongoDB Atlas
   - Verify your username and password

2. **Image Upload Issues**
   - Ensure the `uploads` folder exists in backend
   - Check file size (must be under 5MB)
   - Verify file type (images only)

3. **CORS Errors**
   - Backend CORS is configured for localhost:3000
   - Update CORS settings if using different ports

## 🚀 Deployment

### Backend Deployment (Heroku)
1. Create a Heroku app
2. Set environment variables in Heroku dashboard
3. Deploy using Git

### Frontend Deployment (Netlify/Vercel)
1. Build the React app: `npm run build`
2. Deploy the `build` folder
3. Update `REACT_APP_BACKEND_URL` to production URL

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

