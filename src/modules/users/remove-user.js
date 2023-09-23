const db = require('../../db');
const { NotFoundError } = require('../../shared/errors');

const removeUser = async ({ id }, user) => {
  const existing = await db('users').where({ id }).first();

  if (!existing) {
    throw new NotFoundError('Foydalanuvchi topilmadi');
  };

  const result = await db('users')
    .where({ id })
    .delete()
    .returning('*');

  return result[0];
};

module.exports = removeUser;