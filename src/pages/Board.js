import React from 'react';
import SongInput from '../components/SongInput';
import { Button } from '@material-ui/core';
import { useFormik } from 'formik';

const Board = (props) => {
    const formik = useFormik({
        initialValues: {
            15: '',
            14: '',
            13: '',
            12: '',
            11: '',
            10: '',
            9: '',
            8: '',
            7: '',
            6: '',
            5: '',
            4: '',
            3: '',
            2: '',
            1: '',
            cover1: '',
            cover2: '',
            cover3: '',
            artist1: '',
            artist2: '',
            artist3: '',
            opener1: '',
            opener2: '',
            opener3: '',
            instrumental1: '',
            instrumental2: '',
            instrumental3: '',
            wildcard: ''
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },
    });
    return (
        <>
            <div className='row center-xs middle-xs full-width'>
                <div className='col-xs-12'>
                    <h1>My Board</h1>
                    <h2>{props.activeRun ? props.activeRun : 'Random Run and Run Dates'}</h2>
                </div>
            </div>
            <div className='row center-xs middle-xs full-width'>
                <form onSubmit={formik.handleSubmit}>
                <div className='col-xs-12'>
                    <h2>Setlist Picks</h2>
                    <p>Number of points correspond with number associated on the line. The goal is to get the most points.</p>
                </div>
                <div className='col-xs-12'>
                    <SongInput 
                        points='15' 
                        type='setlist'
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='14' 
                        type='setlist'
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='13' 
                        type='setlist'
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='12' 
                        type='setlist'
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='11' 
                        type='setlist'
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='10' 
                        type='setlist'
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='9' 
                        type='setlist'
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='8' 
                        type='setlist'
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='7' 
                        type='setlist'
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='6' 
                        type='setlist'
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='5' 
                        type='setlist'
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='4' 
                        type='setlist'
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='3' 
                        type='setlist'
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='2' 
                        type='setlist'
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='1' 
                        type='setlist'
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                </div>
                <div className='col-xs-12'>
                    <h2>Additional Points</h2>
                </div>
                <div className='col-xs-12'>
                    <SongInput 
                        points='15' 
                        type='additional' 
                        name='cover1' 
                        explanation={`Cover (teases don't count)`}
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='15' 
                        type='additional' 
                        name='cover2' 
                        explanation={`Cover (teases don't count)`}
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='15' 
                        type='additional' 
                        name='cover3' 
                        explanation={`Cover (teases don't count)`}
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='10' 
                        type='additional' 
                        name='artist1' 
                        explanation={`Artist covered (original artist)`}
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='10' 
                        type='additional' 
                        name='artist2' 
                        explanation={`Artist covered (original artist)`}
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='10' 
                        type='additional' 
                        name='artist3' 
                        explanation={`Artist covered (original artist)`}
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='5' 
                        type='additional' 
                        name='opener1' 
                        explanation={`Openers (any night/any set)`}
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='5' 
                        type='additional' 
                        name='opener2' 
                        explanation={`Openers (any night/any set)`}
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='5' 
                        type='additional' 
                        name='opener3' 
                        explanation={`Openers (any night/any set)`}
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='5' 
                        type='additional' 
                        name='instrumental1' 
                        explanation={`Instrumental UM song`}
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='5' 
                        type='additional' 
                        name='instrumental2' 
                        explanation={`Instrumental UM song`}
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='5' 
                        type='additional' 
                        name='instrumental3' 
                        explanation={`Instrumental UM song`}
                        onChange={formik.handleChange}
                        value={formik.values}
                    />
                    <SongInput 
                        points='25' 
                        type='additional' 
                        name='wildcard' 
                        explanation={`Wild Card (song that hasn’t been played in at least 50 shows- cover or Um original)`}
                                                onChange={formik.handleChange}
                        value={formik.values}
                    />
                </div>
                <div className='col-xs-12 top-spacer bottom-spacer'>
                    <Button className='primary-button' style={{backgroundColor: 'var(--main-green)', padding: '1rem 2rem', color: '#fff'}} type='submit'>Save My Picks</Button>
                </div>
                </form>
            </div>
        </>
    )
}

export default Board
