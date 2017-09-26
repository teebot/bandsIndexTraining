import * as React from "react";
import { Link } from 'react-router-dom';

export interface BandProps { id: string; name: string; yearsActive: string; }

export const BandCardComponent = (props: BandProps) =>
    <Link to={`${props.id}`}>
        <h3>{props.name}</h3>
        <p>{props.yearsActive}</p>
    </Link>;