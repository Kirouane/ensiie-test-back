const Jetpack = require('./Jetpack');
describe('Jetpack toJson', function () {

    test('Test toJson', () => {
        let jetpack = new Jetpack();
        jetpack.id = "1";
        jetpack.name = "X1982BD";
        expect(jetpack.toJson()).toMatchObject({
            id: "1",
            name: "X1982BD"
        })
    });
});