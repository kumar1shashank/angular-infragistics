export interface Employee {
  EmployeeID: number;
  FirstName: string;
  LastName: string;
  Country: string;
  Age: number;
  RegistererDate: string;
  IsActive: boolean;
}

const lastYear = new Date().getFullYear() - 1;
export const employeesData: Employee[] = [{
  "EmployeeID": 2221,
  "FirstName": "Ken",
  "LastName": "Andriveaux",
  "Country": "China",
  "Age": 89,
  "RegistererDate": "8/31/2022",
  "IsActive": false
}];
