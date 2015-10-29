import React, {Component, PropTypes} from 'react';
import {fetchSongsIfNeeded} from '../actions/playlists';
import InfiniteScrollify from '../components/InfiniteScrollify';
import MeToolbar from '../components/MeToolbar';
import SongsCards from '../components/SongsCards';
import Stickify from '../components/Stickify';

class Me extends Component {
    getPlaylist() {
        const {path} = this.props.route;
        switch(path[1]) {
        case 'stream':
            return 'stream';
        case 'likes':
            return 'likes';
        default:
            return 'stream';
        }
    }

    render() {
        const {dispatch, playingSongId, playlists, route, songs, sticky, users} = this.props;
        const playlist = this.getPlaylist();

        return (
            <div className={'me' + (sticky ? ' sticky' : '')}>
                <MeToolbar dispatch={dispatch} route={route} />
                <div className='container'>
                    <SongsCards
                        dispatch={dispatch}
                        playingSongId={playingSongId}
                        playlist={playlist}
                        playlists={playlists}
                        scrollFunc={fetchSongsIfNeeded.bind(null, playlist)}
                        songs={songs}
                        users={users} />
                </div>
            </div>
        );
    }
}

export default Stickify(Me, 50);