const assert = require("assert");
const personFactory = require("../personFactory");

describe("personFactory", function () {
  describe("#createPerson", function () {
    let persona;

    beforeEach(function () {
      persona = personFactory.createPerson({ smart: false, nice: true });
    });

    it("should create a person with correct settings for smart, nice, and a method to introduce themselves", function () {
      assert.strictEqual(persona.readAttribute("smart"), false);
      assert.strictEqual(
        persona.intro(),
        "Hello! My settings are smart: false and nice: true"
      );
    });

    describe("#setNice", function () {
      it("should set the nice attribute to the value passed in", function () {
        persona.setNice(false);
        assert.strictEqual(persona.readAttribute("nice"), false);
      });
    });

    describe("Attempting to change locked properties", function () {
      it("should not change the value for 'smart', and should not add a property to the interface", function () {
        persona.smart = true;

        assert.strictEqual(persona.readAttribute("smart"), false);
        assert.strictEqual(persona.hasOwnProperty("smart"), false);
      });
    });

    describe("#readAttribute() and #readAttributes()", function () {
      it("should return the value", function () {
        assert.strictEqual(persona.readAttribute("smart"), false);
      });

      it("should return all of the values", function () {
        assert(persona.readAttributes(), [
          ["smart", false],
          ["nice", true],
        ]);
      });
    });

    describe("#addTrait", function () {
      it("add a new key/value pair to the object", function () {
        persona.addTrait("testable", true);
        assert.strictEqual(persona.readAttribute("testable"), true);
      });
    });

    describe("#intro", function () {
      it("displays the message from the object's #introduceSelf()", function () {
        assert.strictEqual(
          persona.intro(),
          "Hello! My settings are smart: false and nice: true"
        );

        assert.strictEqual(1, 2);
      });
    });
  });
});
