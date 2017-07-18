import * as React from 'react';
const classnames = require('classnames');

import './Flag.scss';

type FlagProps = React.HTMLProps<any> & {
    isActive?: boolean;
};

export default class Flag extends React.PureComponent<FlagProps, {}> {

    render() {
        const classNames = classnames('Flag', {
            'Flag--active': this.props.isActive
        });

        return (
            <div className={classNames} onClick={this.props.onClick}>
                {this.props.children}
            </div>
        );
      }
}
