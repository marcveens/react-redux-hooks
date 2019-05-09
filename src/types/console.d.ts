// Temporary needed because VS code will otherwise automatically import console..
declare module 'console' {
    export = typeof import('console');
}