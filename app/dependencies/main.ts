class Main implements IMain {
    helloWorldFactory: IHelloWorldFactory;

    constructor(helloWorldFactory: IHelloWorldFactory) {
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