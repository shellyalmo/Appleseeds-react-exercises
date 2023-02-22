import axios from "axios";

export const createAPI = async (taskName, taskStatus) => {
  try {
    const data = JSON.stringify({
      task: taskName,
      complete: taskStatus,
    });

    const config = {
      method: "post",
      url: "https://63f658b1ab76703b15bdb686.mockapi.io/todos",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const readAPI = async () => {
  try {
    const config = {
      method: "get",
      url: "https://63f658b1ab76703b15bdb686.mockapi.io/todos",
      headers: {},
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateAPI = async (taskId, taskStatus) => {
  try {
    const data = JSON.stringify({
      complete: taskStatus,
    });

    const config = {
      method: "put",
      url: `https://63f658b1ab76703b15bdb686.mockapi.io/todos/${taskId}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAPI = async (taskId) => {
  try {
    const config = {
      method: "delete",
      url: `https://63f658b1ab76703b15bdb686.mockapi.io/todos/${taskId}`,
      headers: {},
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
