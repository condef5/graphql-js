function user(root, args, context, info) {
  return context.db.user({ id: root.user.id  }, info)
}

module.exports = { user }
