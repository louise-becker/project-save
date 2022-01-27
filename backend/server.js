import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import crypto from 'crypto';
import bcrypt from 'bcrypt';

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/save';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex'),
  },
});

const User = mongoose.model('User', UserSchema);

const SaveSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
});

const Save = mongoose.model('Save', SaveSchema);

// Defines the port the app will run on. Defaults to 8080, but can be
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
// v1 - Allow all domains
app.use(cors());

// v2 - Allow only one specific domain
// app.use(
// 	cors({
// 		origin: 'https://my-project-frontend.com',
// 	})
// );

// v3 - Allow multiple domains
// const allowedDomains = [
// 	'https://my-project-frontend.com',
// 	'http://localhost:3000',
// ];
// app.use(
// 	cors({
// 		origin: (origin, callback) => {
// 			if (allowedDomains.includes(origin)) {
// 				return callback(null, true);
// 			} else {
// 				return callback(new Error('This domain is not allowed'), false);
// 			}
// 		},
// 	})
// );

app.use(express.json());

const authenticateUser = async (req, res, next) => {
  const accessToken = req.header('Authorization');

  try {
    const user = await User.findOne({ accessToken });
    if (user) {
      next();
    } else {
      res.status(401).json({
        response: {
          message: 'Please, log in',
        },
        success: false,
      });
    }
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
};

// Authentication - 401 (Unauthorized) But should be unauthenticated
// Authorization - 403 (Forbidden) But should be unauthorized

// Start defining your routes here

app.get('/', (req, res) => {
  res.send('Hello World /Louise');
});

app.get('/saves', authenticateUser);
app.get('/saves', async (req, res) => {
  const saves = await Save.find({});
  res.status(201).json({ response: saves, success: true });
});

app.post('/saves', async (req, res) => {
  const { message } = req.body;

  try {
    const newSave = await new Save({ message }).save();
    res.status(201).json({ response: newSave, success: true });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    const salt = bcrypt.genSaltSync();

    if (password.length < 5) {
      throw { message: 'Password must be at least 5 characters long' };
    }

    const newUser = await new User({
      username,
      password: bcrypt.hashSync(password, salt),
    }).save();

    res.status(201).json({
      response: {
        userId: newUser._id,
        username: newUser.username,
        accessToken: newUser.accessToken,
      },
      success: true,
    });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

app.post('/signin', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        response: {
          userId: user._id,
          username: user.username,
          accessToken: user.accessToken,
        },
        success: true,
      });
    } else {
      res.status(404).json({
        response: "Username or password doesn't match",
        success: false,
      });
    }
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
