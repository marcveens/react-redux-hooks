module.exports = function (plop) {
    plop.setGenerator('hookedComponent', {
        description: 'Generate a hooked component including Redux',
        prompts: [{
            type: 'input',
            name: 'componentName',
            message: 'Name of component?'
        },
        {
            type: 'list',
            name: 'reduxType',
            message: 'Basic (loading, error, data) or extended (custom) Redux template?',
            choices: ['Basic', 'Extended']
        },
        {
            type: 'input',
            name: 'propertyName',
            message: 'Name of the state property in Redux?'
        }],
        actions: function (answers) {
            const actions = [];

            if (answers.reduxType === 'Basic') {
                actions.push({
                    type: 'add',
                    path: 'src/{{pascalCase componentName}}/{{pascalCase componentName}}Actions.ts',
                    templateFile: 'plop-templates/basicReduxHookedComponent/Actions.ts.hbs'
                });
                actions.push({
                    type: 'add',
                    path: 'src/{{pascalCase componentName}}/{{pascalCase componentName}}Reducer.ts',
                    templateFile: 'plop-templates/basicReduxHookedComponent/Reducer.ts.hbs'
                });
                actions.push({
                    type: 'add',
                    path: 'src/{{pascalCase componentName}}/{{pascalCase componentName}}State.ts',
                    templateFile: 'plop-templates/basicReduxHookedComponent/State.ts.hbs'
                });
                actions.push({
                    type: 'add',
                    path: 'src/{{pascalCase componentName}}/{{pascalCase componentName}}.tsx',
                    templateFile: 'plop-templates/basicReduxHookedComponent/Component.tsx.hbs'
                });
                actions.push({
                    type: 'add',
                    path: 'src/{{pascalCase componentName}}/use{{pascalCase componentName}}.ts',
                    templateFile: 'plop-templates/basicReduxHookedComponent/use.ts.hbs'
                });
            }

            return actions;
        }
    });
};