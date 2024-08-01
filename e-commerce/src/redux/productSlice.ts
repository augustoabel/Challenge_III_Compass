import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from "axios";

interface Description {
  short: string;
  long: string;
}

interface Color {
  name: string;
  hex: string;
}

interface Images {
  mainImage: string;
  gallery: string[];
}

export interface Product {
  id: number;
  sku: string;
  title: string;
  category: string;
  tags: string[];
  normalPrice: number;
  salePrice: number;
  discountPercentage: number;
  new: boolean;
  description: Description;
  colors: Color[];
  sizes: string[];
  rating: number;
  images: Images;
}

export interface ProductsState {
  items: Product[];
  currentPage: number;
  totalPages: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  loading: boolean;
  error: string | null;
  currentProduct: Product | null;
}

const initialState: ProductsState = {
  items: [],
  currentPage: 1,
  totalPages: 1,
  status: "idle",
  loading: false,
  error: null,
  currentProduct: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("http://localhost:3000/products");
    return response.data as Product[];
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id: number) => {
    const response = await axios.get(`http://localhost:3000/products/${id}`);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        const productsPerPage = 16;
        state.totalPages = Math.ceil(state.items.length / productsPerPage);
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProductById.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.loading = false;
          state.currentProduct = action.payload;
        }
      )
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch product";
      });
  },
});
export const { setPage } = productSlice.actions;

export default productSlice.reducer;
