import React from 'react';
import './TrackList.css';
import { Track } from '../Track/Track';

export class TrackList extends React.Component {
    rederMap() {
        if (this.props.tracks) {

            return this.props.tracks.map(track => {
                return <Track track={track}
                    key={track.id}
                    onAdd={this.props.onAdd}   
                    onRemove={this.props.onRemove}
                    isRemoval={this.props.isRemoval}
                />
            });
        }
    }

    render () {
        return (
            <div className="TrackList">
                {this.renderMap()}
            </div>
        )
    }
}