import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props);
    const { i18n } = this.props;
    this.state = { language: i18n.language };

    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ language: nextProps.i18n.language });
  }

  handleChangeLanguage = lng => {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
  };

  renderLanguageChoice = ({ code, label }) => (
    <option key={code} value={code}>
      {label}
    </option>
  );

  render() {
    const languages = [
      { code: 'en', label: 'English' },
      { code: 'es', label: 'Español' },
    ];

    return (
      <select
        className="lang-switch form-control"
        name="language-selector"
        id="language-selector"
        value={this.state.language}
        onChange={e => this.handleChangeLanguage(e.target.value)}>
        {languages.map(language => this.renderLanguageChoice(language))}
      </select>
    );
  }
}

LanguageSwitcher.propTypes = {
  i18n: PropTypes.shape({
    language: PropTypes.string,
  }),
};

export default translate('')(LanguageSwitcher);
