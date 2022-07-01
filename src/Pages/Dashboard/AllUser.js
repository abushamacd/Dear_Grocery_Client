import React from "react";
import { useQuery } from "react-query";
import UserRow from "./UserRow";
import Loading from "../../Sections/Shared/Loading";

const AllUser = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("user", () =>
    fetch(`https://true-zed-03420.herokuapp.com/user`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")} `,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>SL.</th>
              <th>User</th>
              <th>Role</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <UserRow
                user={user}
                key={user._id}
                index={index}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
