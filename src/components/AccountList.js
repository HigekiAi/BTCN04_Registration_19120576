import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AccountList = ({ updated, setUpdated }) => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    getAccounts();
  }, []);

  const getAccounts = async () => {
    let result = await fetch("https://registration-be-19120576.onrender.com");
    result = await result.json();
    setAccounts(result);
  };

  //   if (!updated) {
  //     getAccounts();
  //     setUpdated(true);
  //   }

  useEffect(() => {
    if (!updated) {
      getAccounts();
      setUpdated(true);
    }
  }, [updated, setUpdated]);

  return (
    <div className="account-list">
      <h3 className="title-list">Registration Success List</h3>
      <ul className="body-list">
        {accounts.map((item) => (
          <li key={item.username}>{item.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default AccountList;
