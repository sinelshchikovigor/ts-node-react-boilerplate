import * as React from 'react';
import * as _ from 'lodash';
import styled from 'styled-components';

export interface IListProps<T> {
    /**
     * List items getter.
     *
     * @memberof IListProps
     */
    getItems: () => T[];
    /**
     * List item renderer.
     *
     * @memberof IListProps
     */
    renderItem: (item: T) => React.ReactNode;
    /**
     * Item key getter.
     *
     * @memberof IListProps
     */
    getItemKey: (item: T) => string;
}

/**
 * List component.
 *
 * @export
 * @class ListComponent
 * @extends {React.PureComponent<IListProps<T>>}
 * @template T
 */
export class ListComponent<T> extends React.PureComponent<IListProps<T>> {
    public renderItem(item: T) {
        return (
            <li key={this.props.getItemKey(item)}>
                {this.props.renderItem(item)}
            </li>
        );
    }

    public renderItems() {
        const items = this.props.getItems();

        if (_.isArray(items)) {
            return items.map((item) => {
                return this.renderItem(item);
            });
        } else {
            return null;
        }
    }

    public render() {
        return (
            <ul>
                {this.renderItems()}
            </ul>
        );
    }
}

export const List = styled(ListComponent)``;
