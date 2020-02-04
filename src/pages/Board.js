import React from 'react'
import SongInput from '../components/SongInput'
import { Button } from '@material-ui/core'

const Board = (props) => {
    return (
        <>
            <div className='row center-xs middle-xs full-width'>
                <div className='col-xs-12'>
                    <h1>My Board</h1>
                    <h2>{props.activeRun ? props.activeRun : 'Random Run and Run Dates'}</h2>
                </div>
            </div>
            <div className='row center-xs middle-xs full-width'>
                <div className='col-xs-12'>
                    <h2>Setlist Picks</h2>
                    <p>Number of points correspond with number associated on the line. The goal is to get the most points.</p>
                </div>
                <div className='col-xs-12'>
                    <SongInput points='15' type='setlist'/>
                    <SongInput points='14' type='setlist'/>
                    <SongInput points='13' type='setlist'/>
                    <SongInput points='12' type='setlist'/>
                    <SongInput points='11' type='setlist'/>
                    <SongInput points='10' type='setlist'/>
                    <SongInput points='9' type='setlist'/>
                    <SongInput points='8' type='setlist'/>
                    <SongInput points='7' type='setlist'/>
                    <SongInput points='6' type='setlist'/>
                    <SongInput points='5' type='setlist'/>
                    <SongInput points='4' type='setlist'/>
                    <SongInput points='3' type='setlist'/>
                    <SongInput points='2' type='setlist'/>
                    <SongInput points='1' type='setlist'/>
                </div>
            </div>
            <div className='row center-xs middle-xs full-width'>
                <div className='col-xs-12'>
                    <h2>Additional Points</h2>
                </div>
                <div className='col-xs-12'>
                    <SongInput points='15' type='additional' explaination={`Cover (teases don't count)`}/>
                </div>
                <div className='col-xs-12'>
                    <SongInput points='15' type='additional' explaination={`Cover (teases don't count)`}/>
                </div>
                <div className='col-xs-12'>
                    <SongInput points='15' type='additional' explaination={`Cover (teases don't count)`}/>
                </div>
                <div className='col-xs-12'>
                    <SongInput points='10' type='additional' explaination={`Artist covered (original artist)`}/>
                </div>
                <div className='col-xs-12'>
                    <SongInput points='10' type='additional' explaination={`Artist covered (original artist)`}/>
                </div>
                <div className='col-xs-12'>
                    <SongInput points='10' type='additional' explaination={`Artist covered (original artist)`}/>
                </div>
                <div className='col-xs-12'>
                    <SongInput points='5' type='additional' explaination={`Openers (any night/any set)`}/>
                </div>
                <div className='col-xs-12'>
                    <SongInput points='5' type='additional' explaination={`Openers (any night/any set)`}/>
                </div>
                <div className='col-xs-12'>
                    <SongInput points='5' type='additional' explaination={`Openers (any night/any set)`}/>
                </div>
                <div className='col-xs-12'>
                    <SongInput points='5' type='additional' explaination={`Instrumental UM song`}/>
                </div>
                <div className='col-xs-12'>
                    <SongInput points='5' type='additional' explaination={`Instrumental UM song`}/>
                </div>
                <div className='col-xs-12'>
                    <SongInput points='5' type='additional' explaination={`Instrumental UM song`}/>
                </div>
                <div className='col-xs-12'>
                    <SongInput points='25' type='additional' explaination={`Wild Card (song that hasn’t been played in at least 50 shows- cover or Um original)`}/>
                </div>
            </div>
            <div className='row center-xs middle-xs full-width'>
                <div className='col-xs-12 top-spacer bottom-spacer'>
                    <Button className='primary-button' style={{backgroundColor: 'var(--main-green)', padding: '1rem 2rem', color: '#fff'}}>Save My Picks</Button>
                </div>
            </div>
        </>
    )
}

export default Board
