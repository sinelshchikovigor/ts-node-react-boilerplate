import * as shell from 'shelljs';

shell.echo('Generating docs...');
shell.exec('typedoc --out dist/docs src --exclude \"**/*+(index|.spec).ts\" --excludeExternals');
