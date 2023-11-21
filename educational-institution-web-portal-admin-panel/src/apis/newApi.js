import { instance } from "./axiosConfig"
export const createNew = async (data) => {
    const res = await instance.post(`/new/create`, data)
    return res.data
}
export const createNewpdf = async (data) => {
    const res = await instance.post(`/new/create-pdf`, data)
    return res.data
}
export const createquanly = async (data) => {
    const res = await instance.post(`/quanly/create`, data)
    return res.data
}
export const getAllnew = async () => {
    const res = await instance.get(`/new/getAll`)
    return res.data
}


export const getAllquanly = async () => {
    const res = await instance.get(`/quanly/getAll`)
    return res.data
}


export const updateQuanly = async (id, {name, position, phoneNumber, selectedImage}) => {
    try {
      const res = await instance.put(`/quanly/update/${id}`, { name, position, phoneNumber, selectedImage });
      return res.data;
    } catch (error) {
      console.error("Error in updateQuanly:", error.message);
      throw error; // Re-throw the error so it can be caught in the calling function
    }
  };
  
  export const deleteQuanly = async (id) => {
    try {
      const res = await instance.delete(`/quanly/delete/${id}`);
      return res.data;
    } catch (error) {
      console.error("Error in updateQuanly:", error.message);
      throw error; // Re-throw the error so it can be caught in the calling function
    }
  };
  

  
export const getAllhieutruong = async () => {
  const res = await instance.get(`/hieutruong/getAll`)
  return res.data
}


export const updatehieutruong = async (id, {name, position, phoneNumber, selectedImage}) => {
  try {
    const res = await instance.put(`/hieutruong/update/${id}`, { name, position, phoneNumber, selectedImage });
    return res.data;
  } catch (error) {
    console.error("Error in updatehieutruong:", error.message);
    throw error; // Re-throw the error so it can be caught in the calling function
  }
};

export const deletehieutruong = async (id) => {
  try {
    const res = await instance.delete(`/hieutruong/delete/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error in updatehieutruong:", error.message);
    throw error; // Re-throw the error so it can be caught in the calling function
  }
};

export const createhieutruong = async (data) => {
  const res = await instance.post(`/hieutruong/create`, data)
  return res.data
}


  
export const getAllteacher = async () => {
  const res = await instance.get(`/teacher/getAll`)
  return res.data
}


export const updateteacher = async (id, {name, position, phoneNumber, selectedImage}) => {
  try {
    const res = await instance.put(`/teacher/update/${id}`, { name, position, phoneNumber, selectedImage });
    return res.data;
  } catch (error) {
    console.error("Error in updateteacher:", error.message);
    throw error; // Re-throw the error so it can be caught in the calling function
  }
};

export const deleteteacher = async (id) => {
  try {
    const res = await instance.delete(`/teacher/delete/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error in updateteacher:", error.message);
    throw error; // Re-throw the error so it can be caught in the calling function
  }
};

export const createteacher = async (data) => {
  const res = await instance.post(`/teacher/create`, data)
  return res.data
}



export const getAllnhanvien = async () => {
  const res = await instance.get(`/nhanvien/getAll`)
  return res.data
}


export const updatenhanvien = async (id, {name, position, phoneNumber, selectedImage}) => {
  try {
    const res = await instance.put(`/nhanvien/update/${id}`, { name, position, phoneNumber, selectedImage });
    return res.data;
  } catch (error) {
    console.error("Error in updatenhanvien:", error.message);
    throw error; // Re-throw the error so it can be caught in the calling function
  }
};

export const deletenhanvien = async (id) => {
  try {
    const res = await instance.delete(`/nhanvien/delete/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error in updatenhanvien:", error.message);
    throw error; // Re-throw the error so it can be caught in the calling function
  }
};

export const createnhanvien = async (data) => {
  const res = await instance.post(`/nhanvien/create`, data)
  return res.data
}



export const getAllnoiquy = async () => {
  const res = await instance.get(`/noiquy/getAll`)
  return res.data
}


export const updatenoiquy = async (id, {name, position, phoneNumber, selectedImage}) => {
  try {
    const res = await instance.put(`/noiquy/update/${id}`, { name, position, phoneNumber, selectedImage });
    return res.data;
  } catch (error) {
    console.error("Error in updatenoiquy:", error.message);
    throw error; // Re-throw the error so it can be caught in the calling function
  }
};

export const deletenoiquy = async (id) => {
  try {
    const res = await instance.delete(`/noiquy/delete/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error in updatenoiquy:", error.message);
    throw error; // Re-throw the error so it can be caught in the calling function
  }
};

export const createnoiquy = async (data) => {
  const res = await instance.post(`/noiquy/create`, data)
  return res.data
}




export const getAllcontact = async () => {
  const res = await instance.get(`/contact/getAll`)
  return res.data
}


export const updatecontact = async (id, { name,
  address,
  selectedImage}) => {
  try {
    const res = await instance.put(`/contact/update/${id}`, {name,
      address,
      selectedImage});
    return res.data;
  } catch (error) {
    console.error("Error in updatecontact:", error.message);
    throw error; // Re-throw the error so it can be caught in the calling function
  }
};

export const deletecontact = async (id) => {
  try {
    const res = await instance.delete(`/contact/delete/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error in updatecontact:", error.message);
    throw error; // Re-throw the error so it can be caught in the calling function
  }
};

export const createcontact = async (data) => {
  const res = await instance.post(`/contact/create`, data)
  return res.data
}