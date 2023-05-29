const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/images', express.static('images'))

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');

  //users collection
  const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    token: {
      type: String,
      required: true,
    },
  });

  //string here represents the collection name in the database and "s" will be added automatically
  const User = mongoose.model('user', userSchema);

  //example: http://localhost:3000/signup
  //save a new user to the database
  app.post('/signup', async (req, res) => {
    //user_raw = { "email":"a4@b.com","password":"pass004"}
    const user_raw = req.body;
    const token = jwt.sign({ user_raw }, process.env.JWT_SECRET);
    const user = new User({ email: user_raw.email, token: token });

    try {
      await user.save();
      res.status(201).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  //example: http://localhost:3000/login?email=a4@b.com&password=pass004
  //get user data based on email
  app.get('/login', async (req, res) => {
    //user_raw = { "email":"a4@b.com","password":"pass004"}
    const user_raw = req.query;

    try {
      //user_db = { "email":"a4@b.com","token":"-"}
      const user_db = await User.findOne({ email: user_raw.email });
      const user_jwt = jwt.verify(user_db.token, process.env.JWT_SECRET);

      if (user_raw.email === user_jwt.user_raw.email && user_raw.password === user_jwt.user_raw.password) {
        res.send({ 'user_data': user_db, 'iat': user_jwt.iat });
      } else {
        res.status(400).send("Invalid email or password");
      }

    } catch (error) {
      res.status(400).send(error);
    }
  });


  //products collection
  const productSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minlength: 3,
    },
    img: String,
    description: String,
    sale: {
      type: Boolean,
      default: false,
    },
    newPrice: {
      type: Number,
      default: 0,
      nonNegative: true,
    },
    originalPrice: {
      type: Number,
      default: 0,
      nonNegative: true,
    },
    detailDescription: {
      type: String,
      required: true,
    },
    detailImage: {
      type: String,
    },
    discount: String
  });

  //string here represents the collection name in the database and "s" will be added automatically
  const Product = mongoose.model('product', productSchema);

  //example: http://localhost:3000/products
  //save a new product to the database
  app.post('/products', async (req, res) => {
    const product = new Product(req.body);
    try {
      await product.save();
      res.status(201).send(product);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  //example: http://localhost:3000/products
  //get all products
  app.get('/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.send(products);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  //example: http://localhost:3000/products/[:id]
  //get a single product based on id
  app.get('/products/:id', async (req, res) => {
    try {
      const product = await Product.findOne({ _id: req.params.id });
      res.send(product);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  //listen on the port
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

