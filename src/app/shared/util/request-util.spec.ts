import { createRequestOption } from "./request-util";

describe('Request Util', () => {

  it('should convert req to url query params', () => {
    const convertedVlaue = createRequestOption({ page: '1', query: 'keyword' });

    expect(convertedVlaue.toString()).toEqual('page=1&query=keyword');
  });

  it('should convert req to url query params with each sort param', () => {
    const convertedVlaue = createRequestOption({ sort: ['id', 'date'] });

    expect(convertedVlaue.toString()).toEqual('sort=id&sort=date');
  });
});
