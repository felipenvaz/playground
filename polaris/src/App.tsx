import React from 'react';
import { AppProvider, Page, Card, Layout } from '@shopify/polaris';
import '@shopify/polaris/styles.css';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Page
        title="Polaris test page"
        subtitle="This is a test page made with @shopify/polaris"
        fullWidth
      >
        <Layout>
          <Layout.Section>
            <Card title="This card needs a header" sectioned>
              This is where the content is. Cool, right?
            </Card>
          </Layout.Section>
          <Layout.Section secondary>
            <Card title="Another card" sectioned>
              This card is not as important...
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </AppProvider>
  );
};

export default App;
