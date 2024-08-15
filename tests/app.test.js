// tests/app.test.js
const { add } = require('../src/app');

describe('Função add', () => {
    test('deve adicionar 2 e 3 e retornar 5', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('deve adicionar 0 e 0 e retornar 0', () => {
        expect(add(0, 0)).toBe(0);
    });

    test('deve adicionar -2 e 5 e retornar 3', () => {
        expect(add(-2, 5)).toBe(3);
    });

    test('deve adicionar -4 e -6 e retornar -10', () => {
        expect(add(-4, -6)).toBe(-10);
    });

    test('deve adicionar 1.1 e 2.2 e retornar 3.3', () => {
        expect(add(1.1, 2.2)).toBeCloseTo(3.3);
    });

    test('deve adicionar 1000000 e 2000000 e retornar 3000000', () => {
        expect(add(1000000, 2000000)).toBe(3000000);
    });

    test('deve adicionar "3" e "4" e retornar 7', () => {
        expect(add(Number("3"), Number("4"))).toBe(7);
    });

    test('deve adicionar -0.5 e 2.5 e retornar 2', () => {
        expect(add(-0.5, 2.5)).toBe(2);
    });

    test('deve adicionar números muito grandes corretamente', () => {
        expect(add(1e+100, 1e+100)).toBe(2e+100);
    });
});
