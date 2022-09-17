module.exports = {
  description: 'application component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message:
        'What is the component name? If the component has more than one word, insert a space between them.'
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/index.ts',
      templateFile: './templates/component/index.ts.hbs'
    },
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
      templateFile: './templates/component/component.tsx.hbs'
    },
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
      templateFile: './templates/component/test.tsx.hbs'
    }
  ]
}
