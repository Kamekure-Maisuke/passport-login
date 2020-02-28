const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = getUserByEmail(email)
    if (!user) {
      return done(null, false, { message: 'ユーザー情報が存在しません。' })
    }
    try {
      if (await bcrypt.compareSync(password, user.password)) {
        return done(null, user)
      }
      return done(null, false, { message: 'パスワードが一致しません' })
    } catch (e) {
      return done(e)
    }
  }

  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id))
  })
}

module.exports = initialize