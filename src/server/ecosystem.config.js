module.exports = {
    apps: [{
        name: 'node-react',
        script: 'src/server.ts',
        instances: 1,
        exec_mode: 'fork',
        watch: [
            'src',
        ],
        ignore_watch: [
            'node_modules',
            'ts'
        ],
        log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
        env: {
            'NODE_ENV': 'development',
        },
        env_production: {
            'NODE_ENV': 'production',
        },
    }],
};
