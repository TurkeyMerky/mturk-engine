import * as React from 'react';
import { Layout } from '@shopify/polaris';
import UserInfo from './UserInfo';
import Calendar from '../Calendar/Calendar';
import EarningsSummary from './EarningsSummary';
import InformationDisclaimer from './InformationDisclaimer';

class ConnectedAccountLayout extends React.PureComponent<{}, never> {
  public render() {
    return (
      <Layout>
        <Layout.Section secondary>
          <UserInfo />
        </Layout.Section>

        <Layout.Section secondary>
          <EarningsSummary />
        </Layout.Section>

        <InformationDisclaimer />

        <Layout.Section>
          <Calendar />
        </Layout.Section>
      </Layout>
    );
  }
}

export default ConnectedAccountLayout;
