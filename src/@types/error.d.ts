interface ApiError {
  status: number;
  message: string;
}

type ApiResponse<T> = T | ApiError