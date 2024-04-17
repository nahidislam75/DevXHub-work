import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class renderArModde extends Component {
  render() {
    const { t } = this.props;
    
    return (
      <div  class="card p-2">
        <h2>{t('greeting')}</h2>
        <p>{t('message')}</p>
      </div>
    );
  }
}

export default withTranslation()(renderArModde);