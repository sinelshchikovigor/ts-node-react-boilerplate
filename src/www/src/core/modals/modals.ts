import * as _ from 'lodash';
import {WWW} from '../../www';

/**
 * Modals module.
 *
 * @export
 * @class Modals
 */
export class Modals {
    /**
     * Static modal ID.
     *
     * @static
     * @type {number}
     * @memberof Modals
     */
    public static staticModalId: number = 0;

    /**
     * Creates application modal.
     *
     * @static
     * @template Resolved
     * @template Rejected
     * @param {() => React.ReactNode} content Modal content.
     * @param {(data?: Resolved) => void} [onConfirm] Modal confirm handler.
     * @param {(data?: Rejected) => void} [onCancel] Modal cancel handler.
     * @param {React.CSSProperties} [style] Modal CSS style declaration.
     * @returns Modal
     * @memberof Modals
     */
    public static create<Resolved, Rejected>(
        content: () => React.ReactNode,
        onConfirm?: (data?: Resolved) => void,
        onCancel?: (data?: Rejected) => void,
        style?: React.CSSProperties,
    ) {
        return new Modals(content, onConfirm as any, onCancel as any, style);
    }

    /**
     * Shows modal.
     *
     * @static
     * @template Resolved
     * @template Rejected
     * @param {() => React.ReactNode} content Modal content.
     * @param {(data?: Resolved) => void} [onConfirm] Modal confirm handler.
     * @param {(data?: Rejected) => void} [onCancel] Modal cancel handler.
     * @memberof Modals
     */
    public static show<Resolved, Rejected>(
        content: () => React.ReactNode,
        onConfirm?: (data?: Resolved) => void,
        onCancel?: (data?: Rejected) => void,
    ) {
        const state = WWW.getState();
        const modals = state.modals;
        const modal = Modals.create(content, onConfirm, onCancel);

        modals.push(modal);

        WWW.setState({
            ...state,
            modals,
        });
    }

    /**
     * Shows modal.
     *
     * @static
     * @template Resolved
     * @template Rejected
     * @param {() => React.ReactNode} content Modal content.
     * @param {React.CSSProperties} [style] Modal CSS style declaration.
     * @param {(data?: Resolved) => void} [onConfirm] Modal confirm handler.
     * @param {(data?: Rejected) => void} [onCancel] Modal cancel handler.
     * @memberof Modals
     */
    public static showStyled<Resolved, Rejected>(
        content: () => React.ReactNode,
        style: React.CSSProperties,
        onConfirm?: (data?: Resolved) => void,
        onCancel?: (data?: Rejected) => void,
    ) {
        const state = WWW.getState();
        const modals = state.modals;
        const modal = Modals.create(content, onConfirm, onCancel, style);

        modals.push(modal);

        WWW.setState({
            ...state,
            modals,
        });
    }

    /**
     * Hides all modals.
     *
     * @static
     * @memberof Modals
     */
    public static hideAll() {
        const state = WWW.getState();

        WWW.setState({
            ...state,
            modals: [],
        });
    }

    /**
     * Modal ID.
     *
     * @type {number}
     * @memberof Modals
     */
    public id: number = 0;

    constructor(
        public content: () => React.ReactNode,
        public onConfirm?: <Resolved>(data?: Resolved) => void,
        public onCancel?: <Rejected>(data?: Rejected) => void,
        public style?: React.CSSProperties,
    ) {
        this.onConfirm = onConfirm || _.noop;
        this.onCancel = onCancel || _.noop;
        this.style = style;
        this.id = Modals.staticModalId++;
    }
}
