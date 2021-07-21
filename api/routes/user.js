const express = require('express');
const router = express.Router();
const { ResourceNotFoundError } = require('../errors');
const users = require('../files/users');

const getPredicate = ({nickname = '', country = ''}) => item => (
  item.nickname.match(new RegExp(nickname, 'g'))
  && item.country.match(new RegExp(country, 'g'))
);

const getUserWithAvatarUrl = (req, user) => {
  if (!user.avatar.match(/^http/)) {
    user.avatar = `${req.protocol}://${req.get('host')}${user.avatar}`;
  }

  return user;
};

router.get('/', (req, res, next) => {
  const page = +req.query.page || 1;
  const limit = 6;
  const filteredUsers = users.filter(getPredicate(req.query.search || {}));
  const result = filteredUsers.slice((page - 1) * limit, page * limit)
    .map(user => getUserWithAvatarUrl(req, user));

  return res.status(200).json({
    data: result,
    metadata: {
      page: page,
      records_per_page: limit,
      total_records: filteredUsers.length,
    },
  });
});

router.get('/:id', (req, res, next) => {
  const user = users.find(user => user.id === +req.params.id);
  if (!user) {
    throw new ResourceNotFoundError('user', +req.params.id);
  }

  return res.status(200).json({
    data: getUserWithAvatarUrl(req, user),
  })
});

module.exports = router;
