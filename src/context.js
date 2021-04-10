import React, { Component } from 'react'

const Context = React.createContext

class provider extends Component {
    state = {
        track_list: [
            {track: {track_name:'abc'}},
            {track: {track_name:'def'}},
            {track: {track_name:'ghi'}},
            {track: {track_name:'jkl'}},
        ],
        heading: 'Top 10 tracks'
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;
