import React from 'react';
import { connect } from 'react-redux'
import walkSprite from './player_walk.png'

function Player(props) {
    return (
        <div 
        style={{
            position: 'relative',
            top: props.position[1],
            left: props.position[0],
            backgroundImage: `url(${walkSprite})`,
            backgroundPosition: '0 0',
            width: '40px',
            height: '40px'
        }}
        />
    )
}

function mapStateToProps(state) {
    return {
        ...state.player
    }
}

export default connect(mapStateToProps)(Player)

function getState(fn1, fn2) {
    return function(component) {
        return component
    }
}

function foo(component) {
    return component
}
