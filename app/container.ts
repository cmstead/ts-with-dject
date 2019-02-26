import module0 from '../app/dependencies/helloWorldFactoryServices/helloWorldFactory';
import module1 from '../app/dependencies/main';


const dject = require('dject');
const container = dject.new({});

container.register(module0.value, module0.name);
container.register(module1.value, module1.name);


export default container;