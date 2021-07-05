import { useCallback, useReducer } from "react";

const initialState = {
  loading: false,
  error: null,
  data: null,
  extra: null,
  identifier: null,
};

const httpReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      return {
        error: null,
        loading: true,
        data: null,
        extra: null,
        identifier: action.identifier,
      };
    case "RESPONSE":
      return {
        ...state,
        loading: false,
        data: action.data,
        extra: action.extra,
      };
    case "ERROR":
      return {
        loading: false,
        error: action.error,
      };
    case "CLEAR":
      return initialState;
    default:
      throw new Error("Should not be reached!");
  }
};

const useHttp = () => {
  const [httpState, httpDispatch] = useReducer(httpReducer, initialState);

  const clear = useCallback(() => httpDispatch({ type: "CLEAR" }), []);

  const sendRequest = useCallback(
    (url, method, body, reqExtra, reqIdentifier) => {
      httpDispatch({ type: "SEND", identifier: reqIdentifier });
      fetch(url, {
        method: method,
        body: body,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          httpDispatch({ type: "RESPONSE", data, extra: reqExtra });
        })
        .catch((error) => {
          httpDispatch({ type: "ERROR", error: "Something went wrong" });
        });
    },
    []
  );

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest,
    reqExtra: httpState.extra,
    identifier: httpState.identifier,
    clear,
  };
};

export default useHttp;
