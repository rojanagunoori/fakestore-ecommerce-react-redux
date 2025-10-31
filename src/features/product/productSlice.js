import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import productService from "./productService";
import { toast } from "react-toastify";

import { STATUS } from "../../constants/Status";



const initialState = {
  products: [],
  product: {
    category: "",
    description: "",
    id: 0,
    image: "",
    price: 0,
    title: "",
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
  status: "",
};

export const getProducts = createAsyncThunk(
  "products/getAll",
  async (_, thunkAPI) => {
    try {
      return await productService.getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getSingleProduct = createAsyncThunk(
  "products/getProduct",
  async (id, thunkAPI) => {
    try {
      return await productService.getSingleProduct(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getCategory = createAsyncThunk(
  "products/getCategory",
  async (data, thunkAPI) => {
    try {
      return await productService.getCategory(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productReset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.status = STATUS.LOADING;
      })
      .addCase(
        getProducts.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.products = action.payload;
          state.status = STATUS.IDLE;
        }
      )
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.status = STATUS.ERROR;
        toast.error(state.status);
      })
      .addCase(getSingleProduct.pending, (state) => {
        state.isLoading = true;
        state.status = STATUS.LOADING;
      })
      .addCase(
        getSingleProduct.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.product = action.payload;
          state.status = STATUS.IDLE;
        }
      )
      .addCase(getSingleProduct.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.status = STATUS.ERROR;
        toast.error(state.status);
      })
      .addCase(getCategory.pending, (state) => {
        state.isLoading = true;
        state.status = STATUS.LOADING;
      })
      .addCase(
        getCategory.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.products = action.payload;
          state.status = STATUS.IDLE;
        }
      )
      .addCase(getCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.status = STATUS.ERROR;
        toast.error(state.status);
      });
  },
});

export const { productReset } = productSlice.actions;
export default productSlice.reducer;