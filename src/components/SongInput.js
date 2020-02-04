import React from 'react';
import { TextField } from '@material-ui/core';

const SongInput = props => {
    let value;

    props.type === 'setlist' ? value = props.value[props.points] : value = props.value[props.name];

    return (
        <div className='row full-width bottom-xs center-xs top-spacer'>
            <div className='col-xs-1 end-xs'>
                <p className='no-margins bottom-spacer-small'>{props.type === 'setlist' ? `${props.points}. ` : `${props.points}: `}</p>
            </div>
            <div className='col-xs-11 start-xs'>
                <TextField 
                    label={props.explanation ? props.explanation : ''} 
                    style={{width: '100%'}} 
                    value={value} 
                    name={props.type === 'additional' ? props.name : props.points}
                    onChange={props.onChange}
                />
            </div>
        </div>
    )
}

export default SongInput;
