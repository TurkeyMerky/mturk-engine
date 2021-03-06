import { WatcherMap, Watcher } from '../types';
import {
  AddWatcher,
  DeleteWatcher,
  ScheduleWatcherTick,
  CancelWatcherTick
} from '../actions/watcher';
import { WatcherEdit } from '../actions/editWatcher';
import { ADD_WATCHER, DELETE_WATCHER, EDIT_WATCHER_FIELD } from '../constants';
import { Map } from 'immutable';
// import { watcherFromId, conflictsOnlyUseNewDateProp } from '../utils/watchers';

const initial: WatcherMap = Map<string, Watcher>();

type WatcherAction =
  | AddWatcher
  | WatcherEdit
  | DeleteWatcher
  | CancelWatcherTick
  | ScheduleWatcherTick;

export default (state = initial, action: WatcherAction) => {
  switch (action.type) {
    case ADD_WATCHER:
      return state.set(action.watcher.groupId, action.watcher);
    case DELETE_WATCHER:
      return state.delete(action.groupId);
    case EDIT_WATCHER_FIELD:
      return state.update(action.groupId, (watcher): Watcher => ({
        ...watcher,
        [action.field]: action.value
      }));
    default:
      return state;
  }
};
