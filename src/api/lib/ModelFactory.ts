const fromDto = (dto: Object, Class: Function) => Class.apply(dto);

function withFactoryMethod<T extends { new (...args: any[]): {} }, DTOType>(Class: T) {
  return class WithFactoryMethod extends Class {
    constructor(dto: DTOType) {
      super(dto)
    }

    static fromDto(dto: DTOType) {
      return new Class(dto)
    }
  };
}
