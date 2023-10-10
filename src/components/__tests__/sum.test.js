import sum from "../sum";

describe("sum", function () {
  it("adds 1 + 2 to equal 3", function () {
    expect(sum(1, 2)).toBe(3);
  });
});

// En esta prueba se pueden identificar varios elementos:

// La suite de pruebas que se declara con el método describe.
// La especificación de la prueba declarada con el método it.
// La expectativa, declarada con el método expect, que en este caso es que el llamado al método sum con los parámetros 1 y 2 de como resultado 3.