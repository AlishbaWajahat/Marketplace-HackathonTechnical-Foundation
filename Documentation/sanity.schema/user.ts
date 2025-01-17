  // user
  export const userSchema = {
    name: 'user', title: 'User', type: 'document', fields: [
      { name: 'name', title: 'Name', type: 'string', description: 'Full name of the user', validation: Rule => Rule.required().min(3).max(100) },
      { name: 'email', title: 'Email', type: 'string', description: 'User email address', validation: Rule => Rule.required().email() },
      { name: 'phone', title: 'Phone', type: 'string', description: 'User phone number', validation: Rule => Rule.optional().min(10).max(15) },
      { name: 'address', title: 'Address', type: 'object', fields: [
        { name: 'street', title: 'Street Address', type: 'string', validation: Rule => Rule.optional() },
        { name: 'city', title: 'City', type: 'string', validation: Rule => Rule.optional() },
        { name: 'state', title: 'State/Province', type: 'string', validation: Rule => Rule.optional() },
        { name: 'zipCode', title: 'Zip Code', type: 'string', validation: Rule => Rule.optional() },
        { name: 'country', title: 'Country', type: 'string', validation: Rule => Rule.optional() }
      ]},
      { name: 'createdAt', title: 'Created At', type: 'datetime', description: 'Timestamp when the user was created', validation: Rule => Rule.required() },
      { name: 'updatedAt', title: 'Updated At', type: 'datetime', description: 'Timestamp when the user details were last updated', validation: Rule => Rule.required() },
      { name: 'orders', title: 'Orders', type: 'array', of: [{ type: 'reference', to: [{ type: 'order' }] }], description: 'List of orders made by the user', validation: Rule => Rule.optional() },
      { name: 'profilePicture', title: 'Profile Picture', type: 'image', description: 'User profile image', options: { hotspot: true }, validation: Rule => Rule.optional() },
      { name: 'role', title: 'Role', type: 'string', options: { list: [{ title: 'Admin', value: 'admin' }, { title: 'Customer', value: 'customer' }, { title: 'Guest', value: 'guest' }] }, description: 'User role within the platform', validation: Rule => Rule.required() }
    ],
    preview: {
      select: { title: 'name', media: 'profilePicture' },
      prepare(selection) {
        const { title, media } = selection
        return { title, media: media || 'https://via.placeholder.com/150' }
      }
    }
  }