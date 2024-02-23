// This is the basic prototype. We aren't concerned with getters/setters here, and any methods the prototpye has should be 'read-only'.
const personPrototype = {
  smart: null,
  nice: null,
  introduceSelf: function () {
    return `Hello! My settings are smart: ${this.smart} and nice: ${this.nice}`;
  },
};

// This is the factory function. It creates a new object with the prototype as its prototype, and returns an object that only has access to the properties of the created object that we wish to expose.

const createPerson = function ({ smart = true, nice = true }) {
  let person = Object.create(personPrototype);
  person.smart = smart;
  person.nice = nice;

  function setNice(value) {
    person.nice = value;
    return person.nice;
  }

  function readAttribute(attribute) {
    return person[attribute];
  }

  function readAttributes() {
    return Object.entries(person);
  }

  function addTrait(key, value) {
    person[key] = value;
  }

  function intro() {
    return person.introduceSelf();
  }

  let interfaceObject = {
    setNice,
    readAttribute,
    readAttributes,
    addTrait,
    intro,
  };

  // We don't freeze the prototype, or the created object, but we freeze the object that lets us interact with the created object.
  Object.freeze(interfaceObject);
  return interfaceObject;
};

// This is only for when I want to tinker with this in Node
module.exports = { createPerson, personPrototype };
