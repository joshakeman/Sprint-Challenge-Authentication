// const axios = require('axios');
// const db = require('../database/dbConfig')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const secrets = require()
// const { authenticate } = require('../auth/authenticate');

// const Users = require('../auth/auth-model')


// module.exports = server => {
//   server.post('/api/register', register);
//   server.post('/api/login', login);
//   server.get('/api/jokes', authenticate, getJokes);
// };

// router.post('/register', (req, res) => {
//   let user = req.body;
//   const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
//   user.password = hash;

//   Users.add(user)
//     .then(saved => {
//       res.status(201).json(saved);
//     })
//     .catch(error => {
//       res.status(500).json(error);
//     });
// });

// router.post('/login', (req, res) => {
//   let { username, password } = req.body;
//   Users.findBy({ username })
//     .first()
//     .then(user => {
//       if (user && bcrypt.compareSync(password, user.password)) {
//         const token = generateToken(user);
//         res.status(200).json({
//           message: `Welcome ${user.username}!`,
//           token,
//         });
//       } else {
//         res.status(401).json({ message: 'Invalid Credentials' });
//       }
//     })
//     .catch(error => {
//       res.status(500).json(error);
//     });
// });

// function generateToken(user) {
//   const payload = {
//     subject: user.id,
//     username: user.username,
//     roles: ['student'],
//   };
//   const options = {
//     expiresIn: '1h',
//   };

//   return jwt.sign(payload, secrets.jwtSecret, options);
// }

// function getJokes(req, res) {
//   const requestOptions = {
//     headers: { accept: 'application/json' },
//   };

//   axios
//     .get('https://icanhazdadjoke.com/search', requestOptions)
//     .then(response => {
//       res.status(200).json(response.data.results);
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Error Fetching Jokes', error: err });
//     });
// }
