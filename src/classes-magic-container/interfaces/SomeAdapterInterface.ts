import {SomeModel} from "../models/model";

export interface SomeAdapterInterface {
    doThing(): Promise<SomeModel>
}