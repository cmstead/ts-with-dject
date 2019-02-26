class HelloWorldFactory implements HelloWorldFactoryInterface {
    buildHelloWorld() {
        return 'Hello world!';
    }
}

HelloWorldFactory['@instantiable'] = true;

export default {
    name: 'helloWorldFactory',
    value: HelloWorldFactory
}
