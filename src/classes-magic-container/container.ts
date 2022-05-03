export class Container {
    private items: Map<string, any>;
    private static container: Container | null = null;

    constructor() {
        this.items = new Map();
    }

    public set<A>(name: string, obj: A){
        this.items.set(name, obj);
    }

    public get<A>(name: string): A {
        if(!this.items.has(name)){
            throw Error(`Container has no item named ${name}`);
        }
        return this.items.get(name);
    }

    static factory(): Container{
        if(!this.container){
            this.container = new Container();

        }
        return this.container;
    }
}
