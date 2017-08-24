import { SearchOptions, SearchSort } from '../types';

export interface MturkSearchParams {
  selectedSearchType: string;
  sortType: string;
  searchWords: string;
  minReward: string;
  qualifiedFor: string;
  pageSige: string;
}

export const generateParams = (options: SearchOptions): MturkSearchParams => {
  const { sortType, minReward, qualified } = options;

  return {
    selectedSearchType: 'hitgroups',
    sortType: sortParam(sortType),
    searchWords: '',
    pageSige: '100',
    minReward,
    qualifiedFor: qualifiedParam(qualified)
  };
};

const sortParam = (sorting: SearchSort) => {
  switch (sorting) {
    case 'Latest':
      return 'LastUpdatedTime:1';
    case 'Batch Size':
      return 'NumHITs%3A1';
    case 'Reward':
      return 'Reward%3A1';
    default:
      throw new Error('Problem generating sortType param');
  }
};

const qualifiedParam = (qualified: boolean): string => {
  return qualified ? 'on' : 'off';
};