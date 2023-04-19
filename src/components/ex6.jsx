import { useEffect, useState } from "react";
import User from "@/components/user";
import styles from "@/styles/Buymed.module.css";
import axios from "axios";

export default function Ex6() {
  const requestUrl = "https://jsonplaceholder.typicode.com/users";
  const [userList, setuserList] = useState([]);
  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = async () => {
    await axios
      .get(requestUrl)
      .then(function (resp) {
        setuserList(resp.data);
      })
      .then(function (error) {
        if (error != undefined) {
          console.log(error);
        }
      })
      .finally(function () {});
  };

  if (userList) {
    return (
      <>
        <ol>
          {userList.map((user) => (
            <li key={user.id}>
              <User
                key={user.id}
                id={user.id}
                name={user.name}
                username={user.username}
                email={user.email}
                phone={user.phone}
                website={user.website}
                address={user.address?.street + " " + user.address?.city}
                company={user.company?.name}
              />
            </li>
          ))}
        </ol>
      </>
    );
  } else {
    return <></>;
  }
}
