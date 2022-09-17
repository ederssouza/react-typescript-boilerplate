module.exports = {
  description: 'application hook',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message:
        "What's the hook's name? If the hook has more than one word, insert a space between them."
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../src/hooks/{{camelCase name}}/index.ts',
      templateFile: './templates/hook/index.ts.hbs'
    },
    {
      type: 'add',
      path: '../src/hooks/{{camelCase name}}/{{camelCase name}}.ts',
      templateFile: './templates/hook/hook.ts.hbs'
    },
    {
      type: 'add',
      path: '../src/hooks/{{camelCase name}}/{{camelCase name}}.test.ts',
      templateFile: './templates/hook/test.ts.hbs'
    }
  ]
}
