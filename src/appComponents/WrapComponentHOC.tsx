import * as React from 'react';

export default function wrapComponent(Component: any): any {
    return class extends React.Component<any, any> {
        render() {
            return <Component {...this.props} />;
        }
    };
}
