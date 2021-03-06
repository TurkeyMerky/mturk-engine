import * as React from 'react';
import { Collapsible, Card, Stack, TextStyle, Caption } from '@shopify/polaris';
import { SearchResult } from '../../types';
import MiscActionsPopover from './MiscActionsPopover';
import ExternalPlainButtons from './ExternalPlainButtons';
import BlockRequesterButton from './BlockRequesterButton';
import { secondsToMinutes } from '../../utils/dates';

export interface Props {
  readonly open: boolean;
  readonly hit: SearchResult;
}

class CollapsibleInfo extends React.PureComponent<Props, never> {
  public render() {
    const { open, hit } = this.props;
    const { description, timeAllottedInSeconds, requester } = hit;

    return (
      <Collapsible open={open}>
        <Card.Section>
          <Stack vertical spacing="loose" distribution="equalSpacing">
            <Caption>
              Requester:{' '}
              <TextStyle variation="subdued">{`${requester.name}`}</TextStyle>
            </Caption>
            <Caption>
              Description:{' '}
              <TextStyle variation="subdued">{`${description ||
                'No description.'}`}</TextStyle>
            </Caption>
            <Caption>
              Time allotted:{' '}
              <TextStyle variation="subdued">{`${secondsToMinutes(
                timeAllottedInSeconds
              )} minutes.`}</TextStyle>
            </Caption>
            <Stack vertical={false} alignment="center">
              <MiscActionsPopover hit={hit} />
              <BlockRequesterButton requester={requester} />
              <ExternalPlainButtons hit={hit} />
            </Stack>
          </Stack>
        </Card.Section>
      </Collapsible>
    );
  }
}

export default CollapsibleInfo;
