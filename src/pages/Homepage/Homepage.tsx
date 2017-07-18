import * as React from 'react';
import { FormattedMessage} from 'react-intl';

// import components - leaving some here for showcase
import BrandClaim from './../../components/BrandClaim/BrandClaim';
import Flags from './../../components/Flags/Flags';

const PropTypes = require('prop-types');

export default class Homepage extends React.PureComponent<{}, {}> {
    static contextTypes = {
        intl: PropTypes.object
    };

    render() {
        return (
            <div className="Homepage">
                {/* Using of translation through context and how to require images through `require command`*/}
                <BrandClaim
                    src={require('./../../../res/images/va-path-narrow.jpg')}
                    title={this.context.intl.formatMessage({id: 'brandclaim.title'})}
                    description={this.context.intl.formatMessage({id: 'brandclaim.description'})}
                />

                <Flags />
            </div>
        );
      }
}

