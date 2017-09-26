import * as React from "react";
import {BandService} from '../services/BandService';
import {Band} from "../types/Band.type";
import {BandDetailComponent} from "../components/BandDetail.component";

export type BandContainerState = {
    band: Band
};

export class BandContainer extends React.Component<any, BandContainerState> {

    constructor() {
        super();
        this.state = { band: null };
    }

    async componentDidMount(): Promise<void> {
        const band = await BandService.byId(this.props.match.params.id);
        this.setState({ band });
    }

    render(): JSX.Element {
        const { band } = this.state;

        return (
            <div>
                <BandDetailComponent band={band} />
            </div>
        );
    }
}