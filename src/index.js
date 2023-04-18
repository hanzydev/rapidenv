const fs = require('node:fs');
const { EOL } = require('node:os');

const LINE_PATTERN =
    /^\s*([\w\.\-]+)\s*=\s*(?:'([^']*)'|"([^"]*)"|`([^"]*)`|([^#\s]*))\s*(?:\s*#.*)?$/m;

class Environments {
    constructor(envPath = '.env') {
        if (typeof envPath !== 'string') {
            throw new TypeError('Env path must be a string');
        }

        this.envPath = envPath;

        if (!fs.existsSync(this.envPath)) {
            fs.writeFileSync(this.envPath, '');
        }
    }

    readVariables() {
        return fs
            .readFileSync(this.envPath, 'utf8')
            .split(EOL)
            .filter((v) => v !== '');
    }

    setVariable(key, value) {
        const envVars = this.readVariables();
        const targetLine = envVars.find((line) => line.split('=')[0] === key);

        if (targetLine !== undefined) {
            envVars.splice(envVars.indexOf(targetLine), 1, `${key}="${value}"`);
        } else {
            envVars.push(`${key}="${value}"`);
        }

        process.env[key] = value;

        fs.writeFileSync(this.envPath, envVars.join(EOL));
    }

    deleteVariable(key) {
        const envVars = this.readVariables();
        const targetLine = envVars.find((line) => line.split('=')[0] === key);

        if (targetLine !== undefined) {
            envVars.splice(envVars.indexOf(targetLine), 1);
            delete process.env[key];
        }

        fs.writeFileSync(this.envPath, envVars.join(EOL));
    }

    parseVariables() {
        const envVars = this.readVariables();
        const vars = {};

        for (const line of envVars) {
            const match = LINE_PATTERN.exec(line.replace(/\r\n?/gm, '\n'));

            if (match) {
                const key = match[1];
                let value = (match[3] || match[2] || '')
                    .trim()
                    .replace(/^(['"`])([\s\S]*)\1$/gm, '$2');

                if (/^(['"`]).*\1$/gm.test(value)) {
                    value = value.replace(/\\n/g, '\n');
                    value = value.replace(/\\r/g, '\r');
                }

                vars[key] = value;
            }
        }

        return vars;
    }

    load() {
        return (process.env = Object.assign(process.env, this.parseVariables()));
    }
}

module.exports = (...args) => new Environments(...args);
