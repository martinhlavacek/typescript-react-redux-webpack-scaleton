import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

type IntlProviderStateProps = {
    key: string;
    locale: string;
    messages: { [key: string]: string; }
};

const mapStateToProps = (state: state.Root) => ({
    key: state.app.locale,
    locale: state.app.locale,
    messages: state.app.messages
});

export default connect<IntlProviderStateProps, {}, {}>(mapStateToProps)(IntlProvider);
