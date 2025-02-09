// import { api } from "./index";

// const extendedApi = api.injectEndpoints({
//   endpoints: (build) => ({
//     toggleCart: build.mutation<any, { productId: number; customerId: number; quantity: number }>({
//       query: (body) => ({
//         url: "cart",
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: ["Cart", "Products"],
//     }),

//     getCart: build.query<any, number>({
//       query: (id) => ({
//         url: `cart/customer/${id}`,
//         method: "GET",
//       }),
//       providesTags: ["Cart"],
//     }),

//     setCart: build.mutation<any, { customerId: number; cart: any[] }>({
//       query: ({ customerId, cart }) => ({
//         url: `cart/update/${customerId}`,
//         method: "POST",
//         body: cart,
//       }),
//       invalidatesTags: ["Cart"],
//     }),
//   }),
// });

// export const {
//   useToggleCartMutation,
//   useGetCartQuery,
//   useSetCartMutation,
// } = extendedApi;
