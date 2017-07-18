import * as React from 'react';
import wrapComponent from './../../appComponents/WrapComponentHOC';
import csTranslations from './../../../res/translations/cs';
import enTranslations from './../../../res/translations/en';
import CsFlagIcon from './../../icons/flags/Cs';
import EnFlagIcon from './../../icons/flags/En';

export default class Locale {
    static readonly defaultLocale = 'cs';
    static readonly supportedLocales = ['cs', 'en'];

    static readonly supportedTranslations = {
        cs: csTranslations,
        en: enTranslations
    };

    static readonly supportedFlags = {
        cs: CsFlagIcon,
        en: EnFlagIcon
    };

    static getTranslation = (locale: string): app.TranslationMessages => {
        return Locale.isSupported(locale) ? (Locale.supportedTranslations[locale]) : Locale.supportedTranslations[Locale.defaultLocale];
    }

    static getLocaleFlag(locale: string): any {
        const flagComponent = (Locale.isSupported(locale)) ? Locale.supportedFlags[locale] : Locale.supportedFlags[Locale.defaultLocale];
        return wrapComponent(flagComponent);
    }

    static isSupported = (locale: string): boolean => {
        return (Locale.supportedLocales.indexOf(locale) > -1);
    }
}
