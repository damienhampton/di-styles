import {SomeModel} from "../models/model";

export type SomeAdapterType = {
    doThing: () => Promise<SomeModel>
}