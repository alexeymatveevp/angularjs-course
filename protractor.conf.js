exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        'apps/1ngbasic/test/e2e/*.js'
    ]
};