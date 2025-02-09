import { api } from "./index";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    toggleWishlist: build.mutation<any,{ productId: number; customerId: number}>({
      query: (body) => ({
        url: "like",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Wishlist", "Products"],
    }),
    getWishlist: build.query<any, number>({
      query: (id) => ({
        url: `like/customer/${id}`,
        method: "GET",
      }),
      providesTags: ["Wishlist"],
    }),

    setWishlist: build.mutation<any, any>({
      query: (args) => ({
        url: `like/wishlist/${args.customerId}`,
        method: "POST",
        body: args.wishlist,
      }),
      invalidatesTags: ["Wishlist"],
    }),
  }),
});

export const {
  useToggleWishlistMutation,
  useGetWishlistQuery,
  useSetWishlistMutation,
} = extendedApi;
