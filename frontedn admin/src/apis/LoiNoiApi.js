import { instance } from "./axiosConfig"
export const createNew = async (data) => {
    const res = await instance.post(`/new/create`, data)
    return res.data
}
export const createNewpdf = async (data) => {
    const res = await instance.post(`/new/create-pdf`, data)
    return res.data
}
export const getLoinoi = async () => {
  const res = await instance.get(`/loinoi/getAll`)
  return res.data
}
export const getmuctieu = async () => {
  const res = await instance.get(`/muctieu/getAll`)
  return res.data
}

export const updateLoinoi = async (id, content) => {
    try {
      const res = await instance.put(`/loinoi/update/${id}`, { content });
      return res.data;
    } catch (error) {
      console.error("Error in updateLoinoi:", error.message);
      throw error; // Re-throw the error so it can be caught in the calling function
    }
  };
  
export const deleteLoiNoi = async (id) => {
    const res = await instance.delete(`/loinoi/delete/${id}`)
    return res.data
}

export const createMuctieu = async (data) => {
  const res = await instance.post(`/muctieu/create`, data)
  return res.data
}

export const createTochuc = async (data) => {
  const res = await instance.post(`/tochuc/create`, data)
  return res.data
}
export const getTochuc = async () => {
  const res = await instance.get(`/tochuc/getAll`)
  return res.data
}
export const updateTochuc = async (id, content) => {
  try {
    const res = await instance.put(`/tochuc/update/${id}`, { content });
    return res.data;
  } catch (error) {
    console.error("Error in update Tochuc:", error.message);
    throw error; // Re-throw the error so it can be caught in the calling function
  }
};


  
export const deleteTochuc = async (id) => {
  const res = await instance.delete(`/tochuc/delete/${id}`)
  return res.data
}
