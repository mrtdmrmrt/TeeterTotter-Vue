import {helpers} from '../helpers';
test('0bject Proportion True', () => {
    const element = [
        {
            color: "#fa8871",
            id: "deneme1",
            isDropped: false,
            isRandom: true,
            left: 7,
            size: 1,
            top: 0,
            type: "circle",
            weight: 1
        }
    ]
    expect(helpers.objectProportion(element,false)).toBe(7);
});
test('0bject Proportion False', () => {
    const element = [
        {
            color: "#2bcf05",
            id: "deneme2",
            isDropped: false,
            isRandom: true,
            left: 5,
            size: 1.38,
            top: 0,
            type: "triangle",
            weight: 3
        }
    ]
    expect(helpers.objectProportion(element,true)).toBe(135);
});