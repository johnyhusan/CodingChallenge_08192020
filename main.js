/*****************************************************************************************
 * Part 2
 ****************************************************************************************/
var employees = [
  { first: "Amanda", last: "Byron", group: "Sales" },
  { first: "Ye", last: "Xia", group: "Receiving", nameOrder: "reverse" },
  { first: "Miltiades", last: "Crescens", group: "Sales" },
  /*...don't foget to account for other entries of the same form, but with different group names.....*/
];

// Part 2 Answer Here
function makeGroup(employeeList) {
  return employeeList.reduce(function (obj, employee) {
    let name =
      employee.nameOrder === "reverse"
        ? employee.last + " " + employee.first
        : employee.first + " " + employee.last;

    if (obj[employee.group]) {
      obj[employee.group].push({ name });
    } else {
      obj[employee.group] = [{ name }];
    }

    return obj;
  }, {});
}

/*****************************************************************************************
 * Bonus
 ****************************************************************************************/

// Bonus Anwser Here
