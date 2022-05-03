import {ContainerBuilder, Reference} from 'node-dependency-injection'
import {SomeAdapter} from "./adapters/SomeAdapter";
import {MyService} from "./services/MyService";

const container = new ContainerBuilder()
container
    .register('someAdapter', SomeAdapter);

container
    .register('myService', MyService)
    .addArgument(new Reference('someAdapter'));

async function main() {
    await container.get('myService').start();
}

main();

