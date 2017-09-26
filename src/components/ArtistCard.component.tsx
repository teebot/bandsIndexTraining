import * as React from "react";

export interface ArtistProps { fullName: string; }

export const ArtistCardComponent = (props: ArtistProps) =>
    <div>
        <h3>{props.fullName}</h3>
    </div>;