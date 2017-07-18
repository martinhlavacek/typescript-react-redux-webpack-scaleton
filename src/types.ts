// App
declare namespace app {
    type TranslationMessages = {
        [key: string]: string;
    };
}

// Redux state
declare namespace state {
    type Root = {
        app: App;
    };

    type App = {
        locale: string;
        defaultLocale: string;
        supportedLocales: string[];
        messages: app.TranslationMessages
    };
}

