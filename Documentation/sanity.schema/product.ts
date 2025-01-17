// product
export const productSchema = {
    name: 'product', title: 'Product', type: 'document', fields: [
      { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required().min(5).max(100) },
      { name: 'slug', title: 'Slug', type: 'slug', description: 'Unique URL-friendly identifier for the product', options: { source: 'title', maxLength: 200 }, validation: Rule => Rule.required() },
      { name: 'description', title: 'Description', type: 'text', validation: Rule => Rule.required().min(20).max(1000) },
      { name: 'price', title: 'Price', type: 'number', validation: Rule => Rule.required().min(0) },
      { name: 'category', title: 'Category', type: 'string', options: { list: [{ title: 'Sofa', value: 'sofa' }, { title: 'Chair', value: 'chair' }, { title: 'Table', value: 'table' }, { title: 'Bed', value: 'bed' }, { title: 'Storage', value: 'storage' }] }, validation: Rule => Rule.required() },
      { name: 'images', title: 'Images', type: 'array', of: [{ type: 'image', options: { hotspot: true } }], validation: Rule => Rule.required().min(1) },
      { name: 'material', title: 'Material', type: 'string', options: { list: [{ title: 'Wood', value: 'wood' }, { title: 'Metal', value: 'metal' }, { title: 'Fabric', value: 'fabric' }, { title: 'Leather', value: 'leather' }] }, validation: Rule => Rule.required() },
      { name: 'dimensions', title: 'Dimensions', type: 'object', fields: [
        { name: 'length', title: 'Length (cm)', type: 'number', validation: Rule => Rule.required().min(1) },
        { name: 'width', title: 'Width (cm)', type: 'number', validation: Rule => Rule.required().min(1) },
        { name: 'height', title: 'Height (cm)', type: 'number', validation: Rule => Rule.required().min(1) }
      ]},
      { name: 'weight', title: 'Weight (kg)', type: 'number', validation: Rule => Rule.required().min(0) },
      { name: 'available', title: 'Available', type: 'boolean', description: 'Indicates whether the product is in stock or not', validation: Rule => Rule.required() },
      { name: 'featured', title: 'Featured', type: 'boolean', description: 'Indicates whether the product is featured on the homepage or not', validation: Rule => Rule.optional() },
      { name: 'externalId', title: 'External ID', type: 'string', description: 'ID used in third-party systems (e.g., ShipEngine or other integrations)', validation: Rule => Rule.optional() },
      { name: 'sizes', title: 'Sizes', type: 'array', of: [{ type: 'string' }], description: 'Available sizes for the product (e.g., Small, Medium, Large)', validation: Rule => Rule.optional() },
      { name: 'colors', title: 'Colors', type: 'array', of: [{ type: 'string', options: { list: [{ title: 'Red', value: 'red' }, { title: 'Blue', value: 'blue' }, { title: 'Green', value: 'green' }, { title: 'Black', value: 'black' }, { title: 'White', value: 'white' }, { title: 'Gray', value: 'gray' }, { title: 'Beige', value: 'beige' }, { title: 'Brown', value: 'brown' }] } }], description: 'Available colors for the product (select from palette)', validation: Rule => Rule.optional() }
    ],
    preview: {
      select: { title: 'title', media: 'images.0' },
      prepare(selection) {
        const { title, media } = selection
        return { title, media: media || 'https://via.placeholder.com/150' }
      }
    }
  }