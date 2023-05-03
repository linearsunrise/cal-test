export function freeze(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

export function seal(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}