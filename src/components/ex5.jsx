import { useEffect, useState } from "react";
import User from "@/components/user";
import styles from "@/styles/Buymed.module.css";

export default function Ex5() {
  const requestUrl = "https://jsonplaceholder.typicode.com/users";
  const [userList, setuserList] = useState([]);
  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = async () => {
    const response = await fetch(requestUrl, {
      method: "GET",
    });
    const responseJSON = await response.json();

    setuserList(responseJSON);
  };

  if (userList) {
    return (
      <div>
        <ul>
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
        </ul>
      </div>
    );
  } else {
    return <></>;
  }
}
