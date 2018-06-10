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
  },
  action007(arg1) {
    axios.post('http://localhost:3000/api/shop', {
      name: arg1.name,
      d: arg1.d,
      cost: arg1.cost,
      it: arg1.it,
      dval: arg1.dval

    })
    .then(function (response) {
      // console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  action008(arg1) {
    axios.get('http://localhost:3000/api/playersinfo')
    .then(function (response) {
      let result = response.data.data.playersInfo;
      AppDispatcher.dispatch({
        type: ActionTypes.TYPE_008,
        data: {
          "info": result
        },
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  },
  action009(arg1) {
    axios.post('http://localhost:3000/api/play', {
      id: arg1.id,
      win: arg1.win
    })
    .then(function (response) {
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  action010(arg1) {
    axios.get('http://localhost:3000/api/playersid')
    .then(function (response) {
      let result = response.data.data;
      // console.log(result)
      AppDispatcher.dispatch({
        type: ActionTypes.TYPE_010,
        data: {
          "id": result
        },
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  },
  action011(arg1) {
    // console.log(arg1)
    axios.get(`http://localhost:3000/api/player/${arg1}`)
    .then(function (response) {
      let result = response.data.data.player;
      // console.log(result)
      AppDispatcher.dispatch({
        type: ActionTypes.TYPE_011,
        data: {
          "player": result
        },
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  },
  action012(arg1) {
    axios.post('http://localhost:3000/api/buysw', {
      p_id: arg1.p_id,
      sw_id: arg1.sw_id
    })
    .then(function (response) {
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  action013(arg1) {
    axios.post('http://localhost:3000/api/buysh', {
      p_id: arg1.p_id,
      sh_id: arg1.sh_id
    })
    .then(function (response) {
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  action014(arg1) {
    axios.post('http://localhost:3000/api/updatecoin', {
      p_id: arg1.p_id,
      coin: arg1.coin
    })
    .then(function (response) {
    })
    .catch(function (error) {
      console.log(error);
    });
  },
};

export default SampleActionCreators;
