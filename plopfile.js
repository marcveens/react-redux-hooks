module.exports = function (plop) {
    plop.setGenerator('hookedComponent', {
        description: 'Generate a hooked component including Redux',
        prompts: [{
            type: 'input',
            name: 'componentName',
            message: 'Name of component?'
        },
        {
            type: 'input',
            name: 'propertyName',
            message: 'Name of the state property in Redux?'
        }],
        actions: [
            {
                type: 'add',
                path: 'src/{{pascalCase componentName}}/{{pascalCase componentName}}Actions.ts',
                templateFile: 'plop-templates/reduxHookedComponent/Actions.ts.hbs'
            }, {
                type: 'add',
                path: 'src/{{pascalCase componentName}}/{{pascalCase componentName}}Reducer.ts',
                templateFile: 'plop-templates/reduxHookedComponent/Reducer.ts.hbs'
            }, {
                type: 'add',
                path: 'src/{{pascalCase componentName}}/{{pascalCase componentName}}State.ts',
                templateFile: 'plop-templates/reduxHookedComponent/State.ts.hbs'
            }, {
                type: 'add',
                path: 'src/{{pascalCase componentName}}/{{pascalCase componentName}}.tsx',
                templateFile: 'plop-templates/reduxHookedComponent/Component.tsx.hbs'
            }, {
                type: 'add',
                path: 'src/{{pascalCase componentName}}/use{{pascalCase componentName}}.ts',
                templateFile: 'plop-templates/reduxHookedComponent/use.ts.hbs'
            },
            {
                type: 'append',
                path: 'src/store/store.ts',
                pattern: '// -- generated-reducers --',
                template: '    {{camelCase componentName}}: {{camelCase componentName}}Reducer,'
            },
            {
                type: 'append',
                path: 'src/store/store.ts',
                pattern: '// -- import-generated-reducers --',
                template: 'import { {{camelCase componentName}}Reducer } from \'../{{pascalCase componentName}}/{{pascalCase componentName}}Reducer\';'
            },
            {
                type: 'append',
                path: 'src/store/RootState.ts',
                pattern: '// -- generated-states --',
                template: '    {{camelCase componentName}}: {{pascalCase componentName}}State;'
            },
            {
                type: 'append',
                path: 'src/store/RootState.ts',
                pattern: '// -- import-generated-states --',
                template: 'import { {{pascalCase componentName}}State } from \'../{{pascalCase componentName}}/{{pascalCase componentName}}State\';'
            }
        ]
    });
};