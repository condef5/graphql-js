function links(parent, args, context, info) {
  console.log(parent.linkIds)
  return context.db.links({ where: { id_in: parent.linkIds } }, info)
}

module.exports = {
  links,
}
