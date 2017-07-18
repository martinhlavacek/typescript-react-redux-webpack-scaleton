import * as React from 'react';
import Image from './../Image/Image';

import './BrandClaim.scss';

interface BrandClaimProps {
    src: string;
    title: string;
    description: string;
}

export default class BrandClaim extends React.PureComponent<BrandClaimProps, {}> {

    render() {
        return (
            <Image src={this.props.src} className="BrandClaim">
                <div className="BrandClaim__title">{this.props.title}</div>
                <div className="BrandClaim__description">{this.props.description}</div>
            </Image>
        );
      }
}
