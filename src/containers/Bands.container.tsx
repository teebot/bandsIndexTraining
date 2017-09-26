import * as React from "react";
import {BandService} from '../services/BandService';
import {BandCardComponent} from "../components/BandCard.component";
import {Band} from "../types/Band.type";

export type BandsContainerState = {
  bands: Array<Band>
};

export class BandsContainer extends React.Component<any, BandsContainerState> {

    constructor() {
        super();
        this.state = { bands: []};
    }

    async componentDidMount(): Promise<void> {
        const bands = await BandService.all();
        this.setState({ bands: bands });
    }


    render(): JSX.Element {
        const { bands } = this.state;

        return (<div>
            { bands.map((band, i) => <BandCardComponent key={i} id={band.id} name={band.name} yearsActive={band.yearsActive} />) }
        </div>);
        // return <div></div>;
    }
}