import { generateSlug } from './generate-slug.util';

describe('Generate slug', () => {
  it('should return empty', () => {
    expect(generateSlug()).toEqual('');
  });

  it('should return unchanged value', () => {
    expect(generateSlug('test')).toEqual('test');
  });

  it('should return changed value', () => {
    expect(generateSlug('Product  name')).toEqual('product-name');
  });
});
