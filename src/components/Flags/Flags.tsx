import * as React from 'react';
import { connect } from 'react-redux';
import { changeLanguage } from './../../workflows/appWorkflow';
import Locale from './../../services/app/Locale';

import Flag from './Flag';

interface FlagsMapStateProps {
    locale: string;
}

interface FlagsMapDispatchProps {
    changeLanguage: (locale: string) => void;
}

interface FlagsStateProps {
    currentLocale: string;
}

export class Flags extends React.PureComponent<FlagsMapStateProps & FlagsMapDispatchProps, FlagsStateProps> {
    state: FlagsStateProps = {
        currentLocale: this.props.locale
    };

    onFlagClick = (locale: string, e: React.MouseEvent<HTMLElement>) => {
        this.props.changeLanguage(locale);
    }

    render() {
        return (
            <div className="Flags">
                {Locale.supportedLocales.map((locale) => {
                    const Component = Locale.getLocaleFlag(locale);

                    return <Flag
                        onClick={this.onFlagClick.bind(this, locale)}
                        isActive={this.state.currentLocale === locale}
                        key={locale}
                    >
                        <Component />
                    </Flag>;
                })}
            </div>
        );
      }
}

const mapDispatchToProps = (dispatch: any) => ({
    changeLanguage: (locale: string) => dispatch(changeLanguage(locale))
});

const mapStateToProps = (state: state.Root) => ({
    locale: state.app.locale
});

export default connect<FlagsMapStateProps, FlagsMapDispatchProps, {}>(mapStateToProps, mapDispatchToProps)(Flags);
