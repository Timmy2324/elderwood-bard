import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first params', () => {
        expect(classNames('someClass1')).toBe('someClass1');
    });

    test('with mods class', () => {
        const expectFunc = classNames('someClass1', { someClass2: false, someClass3: true });
        const expected = 'someClass1 someClass3';

        expect(expectFunc).toBe(expected);
    });

    test('with additional class', () => {
        const expectFunc = classNames('someClass1', {}, ['someClass2', 'someClass3']);
        const expected = 'someClass1 someClass2 someClass3';

        expect(expectFunc).toBe(expected);
    });

    test('with mods and additional class', () => {
        const expectFunc = classNames(
            'someClass1',
            { someClass2: false, someClass3: true },
            ['someClass4'],
        );
        const expected = 'someClass1 someClass4 someClass3';

        expect(expectFunc).toBe(expected);
    });

    test('with undefined', () => {
        const expectFunc = classNames('someClass1', { someClass2: undefined }, [undefined]);
        const expected = 'someClass1';

        expect(expectFunc).toBe(expected);
    });
});
