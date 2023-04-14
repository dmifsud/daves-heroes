import { Gender } from '../enums/gender';
import { CharacterStatus } from '../enums/status';

export interface CharacterLocation {
    name: string;
    url: string;
}

export interface CharacterOrigin {
    name: string;
    url: string;
}

export interface Character {
    id: number;
    created: string;
    episode: string[];
    gender: Gender;
    image: string;
    location: CharacterLocation;
    name: string;
    origin: CharacterOrigin;
    species: string;
    status: CharacterStatus;
    type: string; // TODO: enum
    url: string;
}