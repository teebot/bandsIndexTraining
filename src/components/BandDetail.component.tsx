import * as React from "react";
import {Band} from "../types/Band.type";
import {ArtistCardComponent} from "./ArtistCard.component";

export interface BandDetailProps { band: Band; }

export const BandDetailComponent = (props: BandDetailProps) =>
    <div>
        <h3>{props.band && props.band.name}</h3>
        <p>{props.band && props.band.yearsActive}</p>
        <div>{props.band && props.band.members.map((m, i) => (<ArtistCardComponent key={i} fullName={m.firstName + ' ' + m.lastName}/>))}</div>
    </div>;