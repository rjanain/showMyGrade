import { GASClient } from "gas-client";

/*
export const get_student_performance = async () => {
  console.log("fetched student performance data");

  return new Promise((resolve) =>
    setTimeout(() => resolve(get_student_performance_test()), 3000)
  );
};
*/

export const get_student_performance = async () => {
  const { serverFunctions } = new GASClient({
    allowedDevelopmentDomains: "http://127.0.0.1:5173/",
  });

  return serverFunctions
    .get_student_performance()
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.error(error);
    });
};
