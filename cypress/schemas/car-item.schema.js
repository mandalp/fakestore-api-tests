export const cartItemSchema = {
  type: 'object',
  required: ['productId', 'quantity'],
  properties: {
    productId: { type: 'number' },
    quantity: { type: 'number' }
  }
}
