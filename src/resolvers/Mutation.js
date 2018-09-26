const { hash, compare } = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

async function signup(parent, { name, email, password  }, context, info) {
  const hashedPassword = await hash(password, 10)
  const user = await context.db.createUser({
    name,
    email,
    password: hashedPassword
  })

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

async function login(parent, {email, password}, ctx, info) {
  const user = await ctx.db.user({ email })
  if (!user) {
    throw new Error('No such user found')
  }

  const valid = await compare(password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

async function post(parent, args, context, info) {
  const userId = getUserId(context)
  return context.db.createLink(
    {
      url: args.url,
      description: args.description,
      postedBy: { connect: { id: userId } },
    }
  )
}

module.exports = {
    signup,
    login,
    post,
}
