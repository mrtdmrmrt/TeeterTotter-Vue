import {helpers} from '../helpers';
test('Random Color Generator', () => {
    const randomColor = helpers.randomColorGenerator();
    expect(randomColor).toContain('#');
});