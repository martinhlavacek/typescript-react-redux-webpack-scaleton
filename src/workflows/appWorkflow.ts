// import services
import Locale from './../services/app/Locale';

// Actions
const APP_CHANGE_LOCALE_START = 'app/CHANGE_LOCALE_START';
const APP_CHANGE_LOCALE = 'app/CHANGE_LOCALE';

// Action creators
// function doSomething() {
//     return (dispatch) => {
//         dispatch({ type: APP_SOME_ACTION_START });

//         return someService().then((data) => {
//             return {
//                 type: APP_SOME_ACTION,
//                 payload: data
//             }
//         });
//     };
// }

export const changeLanguage = (locale: string) => {
    return (dispatch) => {
        dispatch({ type: APP_CHANGE_LOCALE_START });
        dispatch({
            type: APP_CHANGE_LOCALE,
            payload: {
                locale
            }
        });
    };
};

// Utility functions


// Reducers
const initialState = {
    defaultLocale: Locale.defaultLocale,
    locale: Locale.defaultLocale,
    supportedLocales: Locale.supportedLocales,
    messages: Locale.supportedTranslations[Locale.defaultLocale]
};

export default function reduce(state: state.App = initialState, action: any = {}): state.App {
    switch (action.type) {
        case APP_CHANGE_LOCALE:
            if (!Locale.isSupported(action.payload.locale)) {
                return state;
            }

            return {...state, locale: action.payload.locale, messages: Locale.getTranslation(action.payload.locale) };
        default:
    }

    return state;
}
