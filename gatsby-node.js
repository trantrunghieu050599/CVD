const path = require("path")
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const OurWorkDetail = path.resolve("./src/templates/OurWorkDetail.js")
  const OurWorkItems = path.resolve("./src/templates/OurWorkItems.js")
  const res = await graphql(`
    query IndexQuery {
      prismic {
        allOurwork_items {
          edges {
            node {
              ourworkitem_name
              name_category_of_ourworkitem
              ourworkitem_image
              relationship_to_categoryourwork {
                ... on PRISMIC_Category_ourwork {
                  _meta {
                    uid
                  }
                }
              }
              _meta {
                uid
              }
            }
          }
        }
      }
    }
  `)

  res.data.prismic.allOurwork_items.edges.forEach(edge => {
    createPage({
      component: OurWorkDetail,
      path: `/projects/${edge.node.relationship_to_categoryourwork._meta.uid}/${edge.node._meta.uid}`,
      context: {
        slug: edge.node._meta.uid,
        dataLayout: edge,
      },
    })
  })
  res.data.prismic.allOurwork_items.edges.forEach(edge => {
    createPage({
      component: OurWorkItems,
      path: `/projects/${edge.node.relationship_to_categoryourwork._meta.uid}`,
      context: {
        // slug: edge.node.relationship_to_categoryourwork._meta.uid,
        slug: edge.node.name_category_of_ourworkitem,
        dataLayout: edge,
      },
    })
  })
}
