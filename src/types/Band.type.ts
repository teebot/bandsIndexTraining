import {Artist} from "./Artist.type";

export type Band = {
    id: string;
    name: string;
    yearsActive: string;
    members: Array<Artist>;
}