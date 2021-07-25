export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60fdb34eae6e850b987aff60",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ohzgh3i1",
                  apiId: "39851ee8-add1-4555-9a08-a72608f0cd60",
                },
                {
                  buildHookId: "60fdb34e7bde70c8baeee580",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-dfrzms4b",
                  apiId: "dc6d366a-c1e0-41f2-8dd5-dde3eb4a3545",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/prplx/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-dfrzms4b.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
