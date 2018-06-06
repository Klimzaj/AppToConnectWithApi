import { ReduceStore } from 'flux/utils';
import ActionTypes from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

class SampleStore extends ReduceStore {
  getInitialState() {
    return {
      logins: [],
      swords: [],
      shields: []
    };
  }
  //obadac to dokladnie
  reduce(state, action) {
    switch (action.type) {
      // case ActionTypes.TYPE_001:
      //   return state;
      // case ActionTypes.TYPE_002:
      //   const newCount = state.count + 1;
      //   const result = {
      //     title: action.data.title,
      //     subtitle: action.data.subtitle,
      //     text: "Action Creator is called " + newCount  + " times.",
      //     count: newCount
      //   }
      //   return result;
      case ActionTypes.TYPE_003:
        const result2 = {
        logins: action.data.logins,
        shields: state.shields,
        swords: state.swords
        }
        return result2;

      case ActionTypes.TYPE_005:
        const result3 = {
          swords: action.data.swords,
          logins: state.logins,
          shields: state.shields
        }
        return result3;

      case ActionTypes.TYPE_006:
        const result4 = {
          shields: action.data.shields,
          logins: state.logins,
          swords: state.logins
        }
        return result4;

      default:
        return state;
    }
  }
}

export default new SampleStore(AppDispatcher);
