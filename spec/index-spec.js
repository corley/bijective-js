const { encode, decode } = require("../src");

describe("Bijective", () => {
  describe("Encode", () => {
    it("should encode '0' to 'a'", () => {
      expect(encode(0)).toEqual("a");
    });

    it("should encode '1' ot 'b'", () => {
      expect(encode(1)).toEqual("b");
    });

    it("should encode '19587376' to 'bzsaG'", () => {
      expect(encode(19587376)).toEqual("bzsaG");
    });

    it("should encode '12345' to 'dnh'", () => {
      expect(encode("12345")).toEqual("dnh");
    });

    it("should encode '1234567' to 'fAVX'", () => {
      expect(encode("1234567")).toEqual("fAVX");
    });
  });

  describe("Decode", () => {
    it("should decode 'a' to '0'", () => {
      expect(decode("a")).toBe(0);
    });

    it("should decode 'b' to '1'", () => {
      expect(decode("b")).toBe(1);
    });

    it("should decode 'bzsaG' to '19587376'", () => {
      expect(decode("bzsaG")).toBe(19587376);
    });

    it("should decode 'dnh' (instead of 'dtx') to '12345", () => {
      expect(decode("dnh")).toBe(12345);
    });
  });
});
