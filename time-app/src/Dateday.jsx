import React, { useState, useEffect } from 'react';
import format from 'date-fns/format';

function Daydate(){
    const [time] = useState(new Date());

    const day = format(time, 'EEEE')
    const date = format(time, 'dd MMMM yyyy')
    return(
        <div className='dateday'>
            <h1>{day}</h1>
            <h1>,</h1>
            <h1>{date}</h1>
        </div>

    )
}

export default Daydate