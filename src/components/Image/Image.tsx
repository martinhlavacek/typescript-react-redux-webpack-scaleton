import * as React from 'react';

import './Image.scss';

type ImageProps = React.HTMLProps<any> & {
    src: string;
};

export default class Image extends React.PureComponent<ImageProps, {}> {

    render() {
        const classnames = require('classnames');

        const style = {
            backgroundImage: 'url("' + this.props.src + '")'
        };

        const classNames = classnames('Image', this.props.className);
        return (
            <div className={classNames} style={style}>
                {this.props.children}
            </div>
        );
      }
}
