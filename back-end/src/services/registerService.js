const jwt = require('jsonwebtoken');
const { passwordHash } = require('../util/crypto');
const { Users, sequelize } = require('../database/models');

const { JWT_SECRET } = process.env;
const jwtConfig = {
  expiresIn: '1h',
};

const registerService = async (payload) => {
  const t = await sequelize.transaction();
  try {
    const { password, email, name } = payload;
    const [{ id, role }, created] = await Users.findOrCreate(
      {
        where: { email },
        defaults: { email, name, password: passwordHash(password) },
        transaction: t,
      },
    );
    if (!created) throw new Error('emailCadastrado');
    
    const token = jwt.sign({ id, role }, JWT_SECRET, jwtConfig);

    await t.commit();

    return { token, id };
  } catch (e) {
    await t.rollback();
    throw new Error('generalError');
  }
};

module.exports = {
  registerService,
};