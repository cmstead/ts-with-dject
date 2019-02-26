const dependencies = [
    '__container',
    'helloWorldFactory'
];

class Main {
    helloWorldFactory: HelloWorldFactoryInterface;

    constructor(...injectedDependencies) {
        const [container] = injectedDependencies;

        const {
            helloWorldFactory
        } = container.buildDependencyMap(dependencies, injectedDependencies);

        this.helloWorldFactory = helloWorldFactory;
    }

    run() {
        console.log(this.helloWorldFactory.buildHelloWorld());
    }
}

Main['@instantiable'] = true;
Main['@dependencies'] = dependencies;

export default {
    name: 'main',
    value: Main
};