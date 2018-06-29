import {expect} from 'chai';
import {Config} from '..';
import {configDefaults} from '../config-defaults';

describe('Config Component Specs', () => {
    beforeEach(() => {
        Config.init();
    });

    it('Should create default configuration', () => {
        expect(Config.get('port')).to.equal(configDefaults.port);
        expect(Config.get('useFileLogging')).to.equal(configDefaults.useFileLogging);
        expect(Config.get('docsUrl')).to.equal(configDefaults.docsUrl);
        expect(Config.get('verbose')).to.equal(configDefaults.verbose);
        expect(Config.get('config')).to.equal(configDefaults.config);
    });
});
