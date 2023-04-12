const fetchData = async (page = 1) => {
  try {
    console.log("running");
    const resp = await fetch(
      `http://localhost:5000/api/blogs/getuserblogs/1?p=${page}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    const data = await resp.json();

    // console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export {fetchData};
