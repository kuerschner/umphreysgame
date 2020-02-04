import React from 'react';
import { TextField } from '@material-ui/core';

const SongInput = props => {
    return (
        <div className='row full-width middle-xs center-xs'>
            <div className='col-xs-2 end-xs'>
                <p>{props.type === 'setlist' ? `${props.points}. ` : `${props.points}: `}</p>

            </div>
            <div className='col-xs-10 start-xs'>
                <TextField label={props.explaination ? props.explaination : ''} style={{width: '80%'}} />
            </div>
        </div>
    )
}

export default SongInput;
