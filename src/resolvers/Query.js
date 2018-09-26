async function feed(parent, args, context, info) {
  const where = args.filter
    ? {
        OR: [
          { url_contains: args.filter },
          { description_contains: args.filter },
        ],
      }
    : {}

  const fragment = `
    fragment onlyId on Link {
      id
    }
  `
  const queriedLinkes = await context.db.links(
    { where, skip: args.skip, first: args.first, orderBy: args.orderBy }
  ).$fragment(fragment);
  
  console.log(queriedLinkes);

  const linkCount = await context.db
  .linksConnection({ where })
  .aggregate()
  .count()

  return {
    count: linkCount,
    linkIds: queriedLinkes.map(link => link.id)
  }
}

module.exports = {
  feed,
  info: () => "Holis boli"
}
