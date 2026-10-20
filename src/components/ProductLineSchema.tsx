'use client'

interface ProductItem {
  name: string
  description?: string
  image?: string
}

interface ProductLineSchemaProps {
  lineName: string
  products: ProductItem[]
}

export function ProductLineSchema({ lineName, products }: ProductLineSchemaProps) {
  if (!products || products.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `RENEW ${lineName}`,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        ...(product.description && { description: product.description }),
        ...(product.image && { image: `https://munich-beauty.de${product.image}` }),
        brand: {
          '@type': 'Brand',
          name: 'RENEW',
        },
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
