import React from 'react';
import { TextField } from '@material-ui/core';

const SongInput = props => {
    let value;

    props.type === 'setlist' ? value = props.value[props.points] : value = props.value[props.name];

    return (
        <div className='row full-width middle-xs center-xs'>
            <div className='col-xs-2 end-xs'>
                <p>{props.type === 'setlist' ? `${props.points}. ` : `${props.points}: `}</p>
            </div>
            <div className='col-xs-10 start-xs'>
                <TextField 
                    label={props.explanation ? props.explanation : ''} 
                    style={{width: '80%'}} 
                    value={value} 
                    name={props.type === 'additional' ? props.name : props.points}
                    onChange={props.onChange}
                />
            </div>
        </div>
    )
}

export default SongInput;
