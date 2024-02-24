import { useState } from "react";

function App() {
  let [formData, setFormData] = useState({
    uname: "",
    uemail: "",
    uphone: "",
    umessage: "",
    index: "",
  });

  let [userData, setUserData] = useState([]);
  function getValue(e) {
    let oldData = { ...formData };
    let inpName = e.target.name;
    let inpValue = e.target.value;
    oldData[inpName] = inpValue;
    setFormData(oldData);
  }
  function handelSubmit(e) {
    e.preventDefault();
    if (formData.index === "") {
      let currentUserData = {
        newuname: formData.uname,
        newuemail: formData.uemail,
        newuphone: formData.uphone,
        newumessage: formData.umessage,
      };
      let checkFilterUser = userData.filter((v) => {
        return v.newuemail == formData.uemail || v.newuphone == formData.uphone;
      });
      if (checkFilterUser.length == 1) {
        alert("Email or Phone Already Exist");
      } else {
        let oldData = [...userData, currentUserData];
        setUserData(oldData);
      }
      setFormData({
        uname: "",
        uemail: "",
        uphone: "",
        umessage: "",
        index: "",
      });
    } else {
      let oldData = userData;
      let checkFilterUser = userData.filter((v, i) => {
        return (
          (v.newuemail == formData.uemail || v.newuphone == formData.uphone) &&
          i != formData.index
        );
      });
      if (checkFilterUser.length == 1) {
        alert("Email or Phone Already Exist");
      }
      else{
      oldData[formData.index]["newuname"] = formData.uname;
      oldData[formData.index]["newuemail"] = formData.uemail;
      oldData[formData.index]["newuphone"] = formData.uphone;
      oldData[formData.index]["newumessage"] = formData.umessage;
      setUserData(oldData);
      // console.log(oldData);
      setFormData({
        uname: "",
        uemail: "",
        uphone: "",
        umessage: "",
        index: "",
      });
    }
  }
  }
  function deleteme(index) {
    let afterDelete = userData.filter((v, i) => {
      return i != index;
    });
    console.log(index);
    console.log(afterDelete);
    setUserData(afterDelete);
  }

  function editRow(index) {
    let toEdit = userData.filter((v, i) => index == i)[0];
    setFormData({
      uname: toEdit.newuname,
      uemail: toEdit.newuemail,
      uphone: toEdit.newuphone,
      umessage: toEdit.newumessage,
      index: index,
    });
  }

  let items = userData.map((data, i) => {
    return (
      <>
        <tr key={i}>
          <td>{data.newuname}</td>
          <td>{data.newuemail}</td>
          <td>{data.newuphone}</td>
          <td>{data.newumessage}</td>
          <td className="flex justify-center gap-2">
            <button onClick={() => deleteme(i)} className="bg-slate-200  w-14">
              Delete
            </button>
            <button
              onClick={() => editRow(i)}
              className="bg-slate-200 rounded-md w-14"
            >
              Edit
            </button>
          </td>
        </tr>
      </>
    );
  });

  return (
    <>
      <h2 className="text-green-500 text-center text-5xl mt-4 font-mono font-semibold">
        Enquiry Form
      </h2>
      <div className=" flex justify-center items-center w-[90%] m-auto">
        <div className="basis-[80%]">
          <form className="w-[80%] text-left mt-5 m-auto">
            <div className="flex flex-col">
              <label className="text-2xl font-semibold" htmlFor="username">
                Name
              </label>
              <input
                id="username"
                name="uname"
                className="border-2 border-green text-left w-[30%] text-3xl"
                type="text"
                value={formData.uname}
                onChange={getValue}
              />
            </div>

            <div className="flex flex-col mt-3">
              <label className="text-2xl font-semibold" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="uemail"
                className="border-2 border-green text-left w-[30%] text-3xl"
                type="text"
                value={formData.uemail}
                onChange={getValue}
              />
            </div>
            <div className="flex flex-col mt-3">
              <label className="text-2xl font-semibold" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                name="uphone"
                className="border-2 border-green text-left w-[30%] text-3xl"
                type="text"
                value={formData.uphone}
                onChange={getValue}
              />
            </div>
            <div className="flex flex-col mt-3">
              <label className="text-2xl font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                name="umessage"
                id="message"
                className="w-[30%] border-2 border-slate-200"
                value={formData.umessage}
                onChange={getValue}
              ></textarea>
            </div>

            <br />
            <button
              onClick={handelSubmit}
              className="bg-green-500 text-white px-2 py-1 rounded-md mt-2"
            >
              {formData.index === "" ? "Save" : "Update"}
            </button>
          </form>
        </div>
        <div className="basis-[20%]">
          <table className="table-auto border-spacing-1 w-[50%] m-auto text-center">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{items}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
