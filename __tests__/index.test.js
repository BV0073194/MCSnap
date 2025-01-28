const { exec } = require('child_process');

describe('Index.js server', () => {
    it('should run without errors', (done) => {
        const process = exec('node index.js', (error, stdout, stderr) => {
            if (error) {
                done.fail(`Server encountered an error: ${error.message}`);
            } else {
                done();
            }
        });

        // Kill the process after a brief delay to ensure it starts correctly
        setTimeout(() => process.kill(), 1000);
    });
});
