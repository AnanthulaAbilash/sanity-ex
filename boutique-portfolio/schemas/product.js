export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "designer",
      title: "Designer",
      type: "reference",
      to: { type: "designer" },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
  ],

  preview: {
    select: {
      title: "title",
      designer: "designer.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { designer } = selection;
      return Object.assign({}, selection, {
        subtitle: designer && `by ${designer}`,
      });
    },
  },
};
