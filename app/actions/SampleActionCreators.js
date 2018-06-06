import axios from 'axios';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/AppConstants';

const SampleActionCreators = {

  action001(arg1) {
    // 1. Do something. (e.g. Fetch JSON from an API)
    // 2. Create an action from the result.
    // 3, Pass the action to the dispatch().
    AppDispatcher.dispatch({
      type: ActionTypes.TYPE_001,
      data: 'RESULT OF YOUT ACTION',
    });
  },
  action003(arg1) {
    axios.get('http://localhost:3000/api/players')
    .then(function (response) {
      // console.log(response.data.data.players.length); // dlugos listy
      // console.log(response.data.data.players[0]); //element z listy
      let result = response.data.data.players;
      AppDispatcher.dispatch({
        type: ActionTypes.TYPE_003,
        data: {
          "logins": result
        },
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  },
  action004(arg1) {
    axios.post('http://localhost:3000/api/players', {
      login: arg1.login,
      password: arg1.password
    })
    .then(function (response) {
      // console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  action005(arg1) {
    axios.get('http://localhost:3000/api/swords')
    .then(function (response) {
      let result = response.data.data.swords;
      AppDispatcher.dispatch({
        type: ActionTypes.TYPE_005,
        data: {
          "swords": result
        },
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  },
  action006(arg1) {
    axios.get('http://localhost:3000/api/shields')
    .then(function (response) {
      let result = response.data.data.shields;
      AppDispatcher.dispatch({
        type: ActionTypes.TYPE_006,
        data: {
          "shields": result
        },
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  }

};

export default SampleActionCreators;
