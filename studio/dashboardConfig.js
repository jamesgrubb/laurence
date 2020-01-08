export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5e15d17057e22b2005d16505',
                  title: 'Sanity Studio',
                  name: 'laurence-studio',
                  apiId: '111f8d89-fa36-4ef4-92f8-e5bb68072d1d'
                },
                {
                  buildHookId: '5e15d170180ce1673305debc',
                  title: 'Blog Website',
                  name: 'laurence-web',
                  apiId: '88b00655-ce32-40d1-a1f4-584cdcdd298e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jamesgrubb/laurence',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://laurence-web.netlify.com', category: 'apps'}
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
