  // order
  export const orderSchema = {
    name: 'order', title: 'Order', type: 'document', fields: [
      { name: 'orderNumber', title: 'Order Number', type: 'string', description: 'Unique order number for the transaction', validation: Rule => Rule.required() },
      { name: 'user', title: 'User', type: 'reference', to: [{ type: 'user' }], description: 'Reference to the user who placed the order', validation: Rule => Rule.required() },
      { name: 'status', title: 'Order Status', type: 'string', options: { list: [{ title: 'Pending', value: 'pending' }, { title: 'Processing', value: 'processing' }, { title: 'Shipped', value: 'shipped' }, { title: 'Delivered', value: 'delivered' }, { title: 'Cancelled', value: 'cancelled' }] }, description: 'Current status of the order', validation: Rule => Rule.required() },
      { name: 'totalAmount', title: 'Total Amount', type: 'number', description: 'Total amount of the order including shipping and taxes', validation: Rule => Rule.required().min(0) },
      { name: 'shippingAddress', title: 'Shipping Address', type: 'object', fields: [
        { name: 'street', title: 'Street Address', type: 'string', validation: Rule => Rule.required() },
        { name: 'city', title: 'City', type: 'string', validation: Rule => Rule.required() },
        { name: 'state', title: 'State/Province', type: 'string', validation: Rule => Rule.required() },
        { name: 'zipCode', title: 'Zip Code', type: 'string', validation: Rule => Rule.required() },
        { name: 'country', title: 'Country', type: 'string', validation: Rule => Rule.required() }
      ], description: 'Shipping address for the order', validation: Rule => Rule.required() },
      { name: 'items', title: 'Items', type: 'array', of: [{ type: 'object', fields: [
        { name: 'product', title: 'Product', type: 'reference', to: [{ type: 'product' }], validation: Rule => Rule.required() },
        { name: 'quantity', title: 'Quantity', type: 'number', validation: Rule => Rule.required().min(1) },
        { name: 'price', title: 'Price', type: 'number', validation: Rule => Rule.required().min(0) }
      ] }], description: 'List of products in the order with quantity and price', validation: Rule => Rule.required().min(1) },
      { name: 'paymentStatus', title: 'Payment Status', type: 'string', options: { list: [{ title: 'Pending', value: 'pending' }, { title: 'Paid', value: 'paid' }, { title: 'Failed', value: 'failed' }] }, description: 'Payment status of the order', validation: Rule => Rule.required() },
      { name: 'paymentMethod', title: 'Payment Method', type: 'string', options: { list: [{ title: 'Credit Card', value: 'credit_card' }, { title: 'PayPal', value: 'paypal' }, { title: 'Stripe', value: 'stripe' }, { title: 'Cash on Delivery', value: 'cod' }] }, description: 'Method of payment used for the order', validation: Rule => Rule.required() },
      { name: 'trackingData', title: 'Tracking Data', type: 'reference', to: [{ type: 'trackingdata' }], description: 'Reference to the tracking data of the order', validation: Rule => Rule.optional() },
      { name: 'createdAt', title: 'Created At', type: 'datetime', description: 'Timestamp when the order was placed', validation: Rule => Rule.required() },
      { name: 'updatedAt', title: 'Updated At', type: 'datetime', description: 'Timestamp when the order was last updated', validation: Rule => Rule.required() }
    ],
    preview: {
      select: { title: 'orderNumber', subtitle: 'status', media: 'user.image' },
      prepare(selection) {
        const { title, subtitle, media } = selection
        return { title: `${title} - ${subtitle}`, subtitle: `Status: ${subtitle}`, media: media || 'https://via.placeholder.com/150' }
      }
    }
  }