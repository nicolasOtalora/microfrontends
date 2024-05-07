import React from 'react';
import { mount } from 'marketing/MarketingApp'; // MarketingApp exposed by child inside webpack config
import MarketingApp from './components/MarketingApp';

export default () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <hr />
      <MarketingApp />
    </div>
  );
}
