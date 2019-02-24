import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const enzymeMounted = [];

const mount = Enzyme.mount.bind(Enzyme);

Enzyme.mount = (...args) => {
  const mounted = mount(...args);
  enzymeMounted.push(mounted);
  return mounted;
};

function clearEnzymeMounted() {
  enzymeMounted.forEach((mounted) => {
    if (mounted.length) {
      mounted.unmount();
    }
  });
}

beforeEach(clearEnzymeMounted);
afterEach(clearEnzymeMounted);
