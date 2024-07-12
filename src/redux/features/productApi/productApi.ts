import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  // tagTypes: ["product"],
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (data) => {
        return {
          url: `/products`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),
    getAllProducts: builder.query({
      query: () => {
        return {
          url: "/products",
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),
    getSingleProduct: builder.query({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "GET",
        };
      },
    }),
    updateSingleProduct: builder.mutation({
      query: ({ updateData, id }) => {
        return {
          url: `/products/${id}`,
          method: "PUT",
          body: updateData,
        };
      },
      invalidatesTags: ["product"],
    }),
    updateProductStockFromOrder: builder.mutation({
      query: (data) => {
        return {
          url: `/products/update-stock`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),
    deleteSingleProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useUpdateSingleProductMutation,
  useDeleteSingleProductMutation,
  useUpdateProductStockFromOrderMutation,
} = productApi;
