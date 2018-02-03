const {encode, decode} = require('../src');

describe("Bijective", () => {
  describe("Encode", () => {
    it("should encode '0' to 'a'", () => {
      expect(encode(0)).toEqual("a");
    });

    it("should encode '1' ot 'b'", () => {
      expect(encode(1)).toEqual("b");
    });

    it("should encode '19587376' to 'bulJA'", () => {
      expect(encode(19587376)).toEqual("bulJA");
    });
  })

  describe("Decode", () => {
    it("should decode 'a' to '0'", () => {
      expect(decode('a')).toBe(0);
    });

    it("should decode 'b' to '1'", () => {
      expect(decode('b')).toBe(1);
    });

    it("should decode 'bulJA' to '19587376'", () => {
      expect(decode('bulJA')).toBe(19587376);
    });
  });
});
