import { useGetUsersQuery } from "../fetures/dataSlice";
import Card from "./Card";

const Users = () => {
  const {
    data,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    isUninitialized,
    error,
    endpointName,
    refetch,
    status,
    currentData,
    fulfilledTimeStamp,
    originalArgs,
    requestId,
    startedTimeStamp,
  } = useGetUsersQuery();

  console.log(
    data,
    "data",
    isError,
    "isError",
    isFetching,
    "isFetching",
    isSuccess,
    "isSuccess",
    isUninitialized,
    "isUninitialized",
    error,
    "error",
    endpointName,
    "endpointName",
    status,
    "status",
    currentData,
    "currentData",
    fulfilledTimeStamp,
    "fulfilledTimeStamp",
    originalArgs,
    "originalArgs",
    requestId,
    "requestId",
    startedTimeStamp,
    "startedTimeStamp"
  );



  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {data.map((user, i) => (
            <Card {...user} key={i} />
          ))}
        </>
      )}

      <button type="submit" onClick={() => refetch()}>
        Fefetch
      </button>
    </>
  );
};

export default Users;
