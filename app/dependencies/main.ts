class Main implements MainInterface {
    helloWorldFactory: HelloWorldFactoryInterface;

    constructor(helloWorldFactory: HelloWorldFactoryInterface) {
        this.helloWorldFactory = helloWorldFactory;
    }

    run() {
        console.log(this.helloWorldFactory.buildHelloWorld());
    }
}

Main['@instantiable'] = true;

export default {
    name: 'main',
    value: Main
};