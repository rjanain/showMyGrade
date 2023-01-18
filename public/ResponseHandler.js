function get_student_performance() {
  const userAccess = getUserAccess();
  var data = [];
  const marks = get_marks_db();

  if (userAccess.type === "admin") data = marks;
  if (userAccess.type === "stud") {
    let roll_number = [...userAccess.id];
    data = marks.filter((item) => roll_number.includes(item.roll));
  }
  // const columns = get_columns();

  console.log({ work: "fetched performannce data", user: userAccess });
  return { data };
}
