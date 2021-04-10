export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6071f198a1330998ce3ef1b4',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-29phzp5h',
                  apiId: '1985a98e-8bf3-4620-abbe-cb5e73597238'
                },
                {
                  buildHookId: '6071f1996e1e9a9c7434643d',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-7nwfb2jd',
                  apiId: 'c35bead7-8206-4577-8cc0-158b053b17e9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/seekersapp2013/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-7nwfb2jd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
