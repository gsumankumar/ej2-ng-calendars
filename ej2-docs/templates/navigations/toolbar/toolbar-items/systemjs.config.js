System.config({
    transpiler: "typescript",
    typescriptOptions: {
        compilerOptions: {
            target: "umd",
            module: "commonjs",
            moduleResolution: "node",
            emitDecoratorMetadata: true,
            experimentalDecorators: true
        }
    },
    paths: {
        "syncfusion:": "http://npmci.syncfusion.com/packages/@syncfusion/",
        "angular:": "https://unpkg.com/@angular/"
    },
    map: {
        app: 'app',
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",

        "@syncfusion/ej2-ng-base": "syncfusion:ej2-ng-base/dist/ej2-ng-base.umd.min.js",
        "@syncfusion/ej2-ng-navigations": "syncfusion:ej2-ng-navigations/dist/ej2-ng-navigations.umd.min.js",

        '@angular/core': 'angular:core/bundles/core.umd.js',
        '@angular/common': 'angular:common/bundles/common.umd.js',
        '@angular/compiler': 'angular:compiler/bundles/compiler.umd.js',
        '@angular/http': 'angular:http/bundles/http.umd.js',
        '@angular/forms': 'angular:forms/bundles/forms.umd.js',
        '@angular/router': 'angular:router/bundles/router.umd.js',
        '@angular/platform-browser': 'angular:platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'angular:platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/material': 'angular:material/bundles/material.umd.js',
        'rxjs': 'https://unpkg.com/rxjs'
    },
    packages: {
        'app': { main: 'main', defaultExtension: 'ts' },
        'rxjs': { main: 'index' },
    }
});

System.import('app');