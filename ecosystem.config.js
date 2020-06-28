module.exports = {
    apps : [{
        name: "deploy",
        script: "./bin/www",
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        },
        watch: true,
        log: "log.js",
    }]
}
