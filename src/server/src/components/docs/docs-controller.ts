import * as path from 'path';
import * as express from 'express';
import {JsonController, Get, UseAfter} from 'routing-controllers';
import {Config, Log} from '../../core';

/** URL for documentation endpoint. */
const docsUrl = Config.get('docsUrl');
/** Path for documentation folder. */
const docsFolder = path.resolve(__dirname, '../../../../dist/docs');

/**
 * Application documentation controller.
 *
 * @export
 * @class DocsController
 */
@JsonController()
export class DocsController {
    /**
     * Return documentation router. Documentation is created with 'typedoc' library.
     *
     * @memberof DocsController
     */
    @Get(docsUrl)
    @UseAfter(express.static(docsFolder))
    public getDocs() {
        return Log.verbose('Returning docs...');
    }
}
