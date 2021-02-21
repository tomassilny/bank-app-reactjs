import React, { Component } from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.translations = {
    sk: require('../langs/sk.json'),
};

i18n.locale = Localization.locale;
i18n.fallbacks = true;

class Translates extends Component {
    getText(text){
        return i18n.t(text);
    }
}

export default Translates;