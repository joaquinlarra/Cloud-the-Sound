import * as types from '../constants/ActionTypes';

export function activeSongId(state = null, action) {
    switch(action.type) {
    case types.CHANGE_ACTIVE_SONG_ID:
        return action.songId;
    default:
        return state;
    }
}

function song(state = {}, action) {
    switch(action.type) {
    case types.RECEIVE_SONG:
        return Object.assign({}, action.song, {
            isFetching: false
        });
    case types.RECEIVE_SONG_COMMENTS:
        return Object.assign({}, state, {
            comments: [...action.comments]
        });
    case types.REQUEST_SONG:
        return Object.assign({}, state, {
            isFetching: true
        });
    default:
        return state;
    }
}

export function songs(state={}, action) {
    switch(action.type) {
    // case types.RECEIVE_SONG:
    //     return Object.assign({}, state, {
    //         [action.songId]: song(state[action.songId], action)
    //     });
    // case types.RECEIVE_SONG_COMMENTS:
    //     return Object.assign({}, state, {
    //         [action.songId]: song(state[action.songId], action)
    //     });
    // case types.REQUEST_SONG:
    //     return Object.assign({}, state, {
    //         [action.songId]: song(state[action.songId], action)
    //     });
    default:
        return state;
    }
}
