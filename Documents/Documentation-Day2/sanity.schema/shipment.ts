  // ShipmenttrackingData
  export const trackingDataSchema = {
    name: 'shipmentData', title: 'Shipment Data', type: 'document', fields: [
      { name: 'order', title: 'Order', type: 'reference', to: [{ type: 'order' }], description: 'Reference to the order associated with this tracking data', validation: Rule => Rule.required() },
      { name: 'trackingNumber', title: 'Tracking Number', type: 'string', description: 'The tracking number provided by the carrier', validation: Rule => Rule.required() },
      { name: 'carrier', title: 'Carrier', type: 'string', options: { list: [{ title: 'UPS', value: 'ups' }, { title: 'FedEx', value: 'fedex' }, { title: 'DHL', value: 'dhl' }, { title: 'USPS', value: 'usps' }] }, description: 'The shipping carrier', validation: Rule => Rule.required() },
      { name: 'status', title: 'Status', type: 'string', options: { list: [{ title: 'In Transit', value: 'in_transit' }, { title: 'Delivered', value: 'delivered' }, { title: 'Out for Delivery', value: 'out_for_delivery' }, { title: 'Pending', value: 'pending' }] }, description: 'The current status of the shipment', validation: Rule => Rule.required() },
      { name: 'estimatedDeliveryDate', title: 'Estimated Delivery Date', type: 'datetime', description: 'The estimated date the order will be delivered', validation: Rule => Rule.optional() },
      { name: 'currentLocation', title: 'Current Location', type: 'string', description: 'Current location of the package during transit (e.g., City, State)', validation: Rule => Rule.optional() },
      { name: 'updates', title: 'Tracking Updates', type: 'array', of: [{ type: 'object', fields: [
        { name: 'timestamp', title: 'Timestamp', type: 'datetime', description: 'The time of the update' },
        { name: 'status', title: 'Status', type: 'string', description: 'Current status at the time of the update' },
        { name: 'location', title: 'Location', type: 'string', description: 'Location at the time of the update' },
        { name: 'description', title: 'Description', type: 'text', description: 'A detailed description of the tracking update' }
      ]}],
      description: 'Array of updates for the shipment throughout its journey', validation: Rule => Rule.optional() },
      { name: 'createdAt', title: 'Created At', type: 'datetime', description: 'Timestamp when the tracking data was created', validation: Rule => Rule.required() },
      { name: 'updatedAt', title: 'Updated At', type: 'datetime', description: 'Timestamp when the tracking data was last updated', validation: Rule => Rule.required() }
    ],
    preview: {
      select: { title: 'trackingNumber', subtitle: 'status', media: 'order.images.0' },
      prepare(selection) {
        const { title, subtitle, media } = selection
        return { title, subtitle, media: media || 'https://via.placeholder.com/150' }
      }
    }
  }