export function get_student_performance_test() {
  console.log("Ping server");
  const userAccess = getUserAccess();
  var data = [];
  const marks = get_marks_db();
  if (userAccess.type === "admin") data = marks;
  if (userAccess.type === "stud") {
    let roll_number = [...userAccess.id];
    data = marks.filter((item) => roll_number.includes(item.roll));
  }
  // const columns = get_columns();

  //Logger.log({ data, columns });
  return { data };
}

function get_marks_db() {
  const marks_db = [
    {
      roll: "21B20222",
      e1_obj: 5.5,
      e1_sub: 6.56,
      e1: 12.059999999999999,
      e2_obj: 3.1,
      e2_sub: 7.45,
      e2: 10.55,
    },
    {
      roll: "21B20223",
      e1_obj: 3.36,
      e1_sub: 1.85,
      e1: 5.21,
      e2_obj: 4.04,
      e2_sub: 13.72,
      e2: 17.76,
    },
    {
      roll: "21B20224",
      e1_obj: 6.82,
      e1_sub: 10.32,
      e1: 17.14,
      e2_obj: 3.16,
      e2_sub: 12.68,
      e2: 15.84,
    },
    {
      roll: "21B20225",
      e1_obj: 3.88,
      e1_sub: 1.93,
      e1: 5.81,
      e2_obj: 0.13,
      e2_sub: 11.25,
      e2: 11.38,
    },
    {
      roll: "21B20226",
      e1_obj: 0.35,
      e1_sub: 1.91,
      e1: 2.26,
      e2_obj: 3.83,
      e2_sub: 3.43,
      e2: 7.26,
    },
    {
      roll: "21B20227",
      e1_obj: 0.59,
      e1_sub: 6.02,
      e1: 6.609999999999999,
      e2_obj: 4.35,
      e2_sub: 4.03,
      e2: 8.379999999999999,
    },
    {
      roll: "21B20228",
      e1_obj: 4.66,
      e1_sub: 1.62,
      e1: 6.28,
      e2_obj: 4.44,
      e2_sub: 5.51,
      e2: 9.95,
    },
    {
      roll: "21B20229",
      e1_obj: 5.5,
      e1_sub: 5.45,
      e1: 10.95,
      e2_obj: 5.83,
      e2_sub: 6.22,
      e2: 12.05,
    },
    {
      roll: "21B202210",
      e1_obj: 3.53,
      e1_sub: 11.82,
      e1: 15.35,
      e2_obj: 1.02,
      e2_sub: 9.34,
      e2: 10.36,
    },
    {
      roll: "21B202211",
      e1_obj: 1.72,
      e1_sub: 4.97,
      e1: 6.6899999999999995,
      e2_obj: 0.75,
      e2_sub: 10.67,
      e2: 11.42,
    },
    {
      roll: "21B202212",
      e1_obj: 4.92,
      e1_sub: 8.62,
      e1: 13.54,
      e2_obj: 3.66,
      e2_sub: 4.93,
      e2: 8.59,
    },
    {
      roll: "21B202213",
      e1_obj: 2.35,
      e1_sub: 9.59,
      e1: 11.94,
      e2_obj: 3,
      e2_sub: 5,
      e2: 8,
    },
    {
      roll: "21B202214",
      e1_obj: 1.24,
      e1_sub: 10.28,
      e1: 11.52,
      e2_obj: 1.32,
      e2_sub: 5.97,
      e2: 7.29,
    },
    {
      roll: "21B202215",
      e1_obj: 8.55,
      e1_sub: 1.75,
      e1: 10.3,
      e2_obj: 0.87,
      e2_sub: 1.42,
      e2: 2.29,
    },
    {
      roll: "21B202216",
      e1_obj: 5.21,
      e1_sub: 9.54,
      e1: 14.75,
      e2_obj: 4.46,
      e2_sub: 1.58,
      e2: 6.04,
    },
    {
      roll: "21B202217",
      e1_obj: 0.55,
      e1_sub: 5.42,
      e1: 5.97,
      e2_obj: 1.22,
      e2_sub: 14.85,
      e2: 16.07,
    },
    {
      roll: "21B202218",
      e1_obj: 2.44,
      e1_sub: 9.31,
      e1: 11.75,
      e2_obj: 6.26,
      e2_sub: 5.66,
      e2: 11.92,
    },
    {
      roll: "21B202219",
      e1_obj: 7.39,
      e1_sub: 2.17,
      e1: 9.559999999999999,
      e2_obj: 2.56,
      e2_sub: 3.69,
      e2: 6.25,
    },
    {
      roll: "21B202220",
      e1_obj: 7.38,
      e1_sub: 4.05,
      e1: 11.43,
      e2_obj: 4.52,
      e2_sub: 2.32,
      e2: 6.84,
    },
    {
      roll: "21B202221",
      e1_obj: 5.32,
      e1_sub: 1.07,
      e1: 6.390000000000001,
      e2_obj: 3.45,
      e2_sub: 6.16,
      e2: 9.61,
    },
    {
      roll: "21B202222",
      e1_obj: 7.33,
      e1_sub: 18.91,
      e1: 26.240000000000002,
      e2_obj: 4.05,
      e2_sub: 0.79,
      e2: 4.84,
    },
    {
      roll: "21B202223",
      e1_obj: 5.02,
      e1_sub: 13.27,
      e1: 18.29,
      e2_obj: 0.01,
      e2_sub: 3.35,
      e2: 3.36,
    },
    {
      roll: "21B202224",
      e1_obj: 0.39,
      e1_sub: 6.81,
      e1: 7.199999999999999,
      e2_obj: 3.33,
      e2_sub: 11.73,
      e2: 15.06,
    },
    {
      roll: "21B202225",
      e1_obj: 6.22,
      e1_sub: 16.35,
      e1: 22.57,
      e2_obj: 2.51,
      e2_sub: 2.84,
      e2: 5.35,
    },
    {
      roll: "21B202226",
      e1_obj: 8.78,
      e1_sub: 17.14,
      e1: 25.92,
      e2_obj: 2.27,
      e2_sub: 8.55,
      e2: 10.82,
    },
    {
      roll: "21B202227",
      e1_obj: 1.03,
      e1_sub: 7.07,
      e1: 8.1,
      e2_obj: 4.68,
      e2_sub: 14.38,
      e2: 19.060000000000002,
    },
    {
      roll: "21B202228",
      e1_obj: 6.46,
      e1_sub: 3.04,
      e1: 9.5,
      e2_obj: 5.14,
      e2_sub: 3.64,
      e2: 8.78,
    },
    {
      roll: "21B202229",
      e1_obj: 4.89,
      e1_sub: 6.27,
      e1: 11.16,
      e2_obj: 7,
      e2_sub: 3.16,
      e2: 10.16,
    },
    {
      roll: "21B202230",
      e1_obj: 4.52,
      e1_sub: 7.44,
      e1: 11.96,
      e2_obj: 0.49,
      e2_sub: 14.95,
      e2: 15.44,
    },
    {
      roll: "21B202231",
      e1_obj: 5.61,
      e1_sub: 10.98,
      e1: 16.59,
      e2_obj: 4.29,
      e2_sub: 1.35,
      e2: 5.640000000000001,
    },
    {
      roll: "21B202232",
      e1_obj: 4.08,
      e1_sub: 6.54,
      e1: 10.620000000000001,
      e2_obj: 0.98,
      e2_sub: 5.75,
      e2: 6.73,
    },
    {
      roll: "21B202233",
      e1_obj: 3.24,
      e1_sub: 9.96,
      e1: 13.200000000000001,
      e2_obj: 6.13,
      e2_sub: 4.35,
      e2: 10.48,
    },
    {
      roll: "21B202234",
      e1_obj: 1.97,
      e1_sub: 11.96,
      e1: 13.930000000000001,
      e2_obj: 8.69,
      e2_sub: 6.86,
      e2: 15.55,
    },
    {
      roll: "21B202235",
      e1_obj: 1.73,
      e1_sub: 10.72,
      e1: 12.450000000000001,
      e2_obj: 6.58,
      e2_sub: 13.3,
      e2: 19.880000000000003,
    },
    {
      roll: "21B202236",
      e1_obj: 5.12,
      e1_sub: 1.37,
      e1: 6.49,
      e2_obj: 3.71,
      e2_sub: 16.91,
      e2: 20.62,
    },
    {
      roll: "21B202237",
      e1_obj: 5.91,
      e1_sub: 12.7,
      e1: 18.61,
      e2_obj: 4.97,
      e2_sub: 7.9,
      e2: 12.870000000000001,
    },
    {
      roll: "21B202238",
      e1_obj: 4.73,
      e1_sub: 17.96,
      e1: 22.69,
      e2_obj: 0.21,
      e2_sub: 10.89,
      e2: 11.100000000000001,
    },
    {
      roll: "21B202239",
      e1_obj: 2.03,
      e1_sub: 9.76,
      e1: 11.79,
      e2_obj: 0.43,
      e2_sub: 9.27,
      e2: 9.7,
    },
    {
      roll: "21B202240",
      e1_obj: 0.9,
      e1_sub: 12.82,
      e1: 13.72,
      e2_obj: 2.01,
      e2_sub: 11.6,
      e2: 13.61,
    },
    {
      roll: "21B202241",
      e1_obj: 4.14,
      e1_sub: 1.87,
      e1: 6.01,
      e2_obj: 7.98,
      e2_sub: 11.05,
      e2: 19.03,
    },
    {
      roll: "21B202242",
      e1_obj: 7.62,
      e1_sub: 9.77,
      e1: 17.39,
      e2_obj: 0.7,
      e2_sub: 4.29,
      e2: 4.99,
    },
    {
      roll: "21B202243",
      e1_obj: 4.7,
      e1_sub: 3.2,
      e1: 7.9,
      e2_obj: 1.32,
      e2_sub: 1.67,
      e2: 2.99,
    },
    {
      roll: "21B202244",
      e1_obj: 2.53,
      e1_sub: 6.56,
      e1: 9.09,
      e2_obj: 0.82,
      e2_sub: 11.23,
      e2: 12.05,
    },
    {
      roll: "21B202245",
      e1_obj: 1.42,
      e1_sub: 6.02,
      e1: 7.4399999999999995,
      e2_obj: 3.26,
      e2_sub: 1.13,
      e2: 4.39,
    },
    {
      roll: "21B202246",
      e1_obj: 4.17,
      e1_sub: 8.77,
      e1: 12.94,
      e2_obj: 7.02,
      e2_sub: 1.35,
      e2: 8.37,
    },
  ];
  return marks_db;
}

function get_user_db() {
  const user = [
    {
      name: "User Name 1",
      id: "21B20222",
      div: "D1",
      tut: "T1",
      email: "jana.rakesh41@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 2",
      id: "21B20223",
      div: "D1",
      tut: "T1",
      email: "jana.rakesh41@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 3",
      id: "21B20224",
      div: "D1",
      tut: "T1",
      email: "jana.rakesh41@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 4",
      id: "21B20225",
      div: "D1",
      tut: "T2",
      email: "jana.rakesh41@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 5",
      id: "21B20226",
      div: "D1",
      tut: "T2",
      email: "jana.rakesh41@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 6",
      id: "21B20227",
      div: "D1",
      tut: "T2",
      email: "jana.rakesh41@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 7",
      id: "21B20228",
      div: "D1",
      tut: "T2",
      email: "jana.rakesh41@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 8",
      id: "21B20229",
      div: "D1",
      tut: "T2",
      email: "jana.rakesh41@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 9",
      id: "21B202210",
      div: "D1",
      tut: "T2",
      email: "jana.rakesh41@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 10",
      id: "21B202211",
      div: "D1",
      tut: "T3",
      email: "jana.rakesh41@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 11",
      id: "21B202212",
      div: "D1",
      tut: "T3",
      email: "jana.rakesh41@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 12",
      id: "21B202213",
      div: "D1",
      tut: "T3",
      email: "jana.rakesh41@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 13",
      id: "21B202214",
      div: "D1",
      tut: "T3",
      email: "jana.rakesh41@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 14",
      id: "21B202215",
      div: "D1",
      tut: "T3",
      email: "jana.rakesh41@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 15",
      id: "21B202216",
      div: "D1",
      tut: "T3",
      email: "jana.rakesh41@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 16",
      id: "21B202217",
      div: "D1",
      tut: "T3",
      email: "jana.rakesh41@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 17",
      id: "21B202218",
      div: "D2",
      tut: "T3",
      email: "jana.rakesh41@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 18",
      id: "21B202219",
      div: "D2",
      tut: "T1",
      email: "jana.rakesh41@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 19",
      id: "21B202220",
      div: "D2",
      tut: "T1",
      email: "jana.rakesh41@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 20",
      id: "21B202221",
      div: "D2",
      tut: "T1",
      email: "jana.rakesh41@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 21",
      id: "21B202222",
      div: "D2",
      tut: "T1",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 22",
      id: "21B202223",
      div: "D2",
      tut: "T2",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 23",
      id: "21B202224",
      div: "D2",
      tut: "T2",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 24",
      id: "21B202225",
      div: "D2",
      tut: "T2",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 25",
      id: "21B202226",
      div: "D2",
      tut: "T2",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 26",
      id: "21B202227",
      div: "D2",
      tut: "T2",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 27",
      id: "21B202228",
      div: "D2",
      tut: "T2",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 28",
      id: "21B202229",
      div: "D2",
      tut: "T3",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 29",
      id: "21B202230",
      div: "D2",
      tut: "T3",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 30",
      id: "21B202231",
      div: "D2",
      tut: "T3",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 31",
      id: "21B202232",
      div: "D3",
      tut: "T3",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 32",
      id: "21B202233",
      div: "D3",
      tut: "T3",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 33",
      id: "21B202234",
      div: "D3",
      tut: "T3",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 34",
      id: "21B202235",
      div: "D3",
      tut: "T3",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 35",
      id: "21B202236",
      div: "D3",
      tut: "T3",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 36",
      id: "21B202237",
      div: "D3",
      tut: "T1",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 37",
      id: "21B202238",
      div: "D3",
      tut: "T1",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 38",
      id: "21B202239",
      div: "D3",
      tut: "T1",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 39",
      id: "21B202240",
      div: "D3",
      tut: "T1",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 40",
      id: "21B202241",
      div: "D3",
      tut: "T1",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 41",
      id: "21B202242",
      div: "D3",
      tut: "T2",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 42",
      id: "21B202243",
      div: "D3",
      tut: "T2",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 43",
      id: "21B202244",
      div: "D3",
      tut: "T2",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 44",
      id: "21B202245",
      div: "D2",
      tut: "T1",
      email: "junkhitman@gmail.com",
      type: "stud",
    },
    {
      name: "User Name 45",
      id: "21B202246",
      div: "D3",
      tut: "T2",
      email: "20002828@iitb.ac.in",
      type: "admin",
    },
  ];
  return user;
}

/**
 * Get Email ID of Active user
 */
function getActiveUser() {
  //for development purpose
  //return "20002828@iitb.ac.in";

  // In production remove all previous lines

  const activeUser = Session.getActiveUser().getEmail();
  return activeUser;
}

/**
 * Check whether an email exist in
 * the user database
 */
function validateUser() {
  const user_db = get_user_db();
  if (!Array.isArray(user_db)) return false;
  const activeUser = getActiveUser();
  const validation = user_db.some((u) => u.email === activeUser);
  return validation;
}

function getUserAccess() {
  const errorAccess = { type: "error", access_to: null };
  const visitorAccess = { type: "visitor", access_to: null };

  const user_db = get_user_db();
  if (!Array.isArray(user_db)) return errorAccess;

  const activeUser = getActiveUser();
  const userAccess = user_db.find((u) => u.email === activeUser);
  if (userAccess) return userAccess;
  return visitorAccess;
}