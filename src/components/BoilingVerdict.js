import React from 'react';

export default function BoilingVerdict({ temperature = 0 }) {
    return <div>{temperature >= 100 ? 'You can boil.' : "You can't boil."}</div>;
}
