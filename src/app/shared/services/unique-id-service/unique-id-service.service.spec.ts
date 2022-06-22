import { UniqueIdService } from './unique-id-service.service';

describe('UniqueIdServiceService', () => {
  let service: UniqueIdService;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`${UniqueIdService.prototype.generateUniqueId} should generate an id when called`, () => {
    expect(service.generateUniqueId()).toBeTruthy()
  })

  it(`${UniqueIdService.prototype.getNumberOfGeneratedIds} should return the number of generated ids when called`, () => {
    service.generateUniqueId()
    service.generateUniqueId()
    expect(service.getNumberOfGeneratedIds()).toBe(2)
  })

});
