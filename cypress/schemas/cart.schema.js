import { cartItemSchema } from './car-item.schema'

export const cartSchema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    userId: { type: 'number' },
    products: {
      type: 'array',
      items: cartItemSchema
    }
  }
}