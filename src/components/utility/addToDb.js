import { toast } from "react-toastify";

const getStoredReadList = () => {
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();

  if (storedList.includes(id)) {
    toast.error("This Book is already exists");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
    toast.success("This Book Is Added to Read List");
  }
};

export { addToStoredReadList, getStoredReadList };
