export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('treacherous-aurelia');

    aurelia.start().then(a => a.setRoot('src/app'));
}