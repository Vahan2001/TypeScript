interface CompanyStructure {
  headquarters: Headquarters;
}
interface Headquarters {
  financeDepartment: FinanceDepartment;
  itDepartment: ITDepartment;
}
interface FinanceDepartment {
  payroll: Payroll;
  accounting: Accounting;
}
interface ITDepartment {
  infrastructure: Infrastructure;
  development: {
    frontendTeam: FrontendTeam;
  };
}
interface Payroll {
  manager: Employee;
  staff: Employee;
}
interface Accounting {
  manager: Employee;
}
interface Infrastructure {
  server: Server;
}
interface FrontendTeam {
  leadDeveloper: Developer;
  juniorDeveloper: Developer;
}
interface Employee {
  name: string;
  salary?: number;
}
interface Server {
  id: string;
  status: string;
}
interface Developer {
  name: string;
  experience: string;
}

const companyStructure: CompanyStructure = {
  headquarters: {
    financeDepartment: {
      payroll: {
        manager: {
          name: "Alice",
          salary: 75000,
        },
        staff: {
          name: "Bob",
          salary: 50000,
        },
      },
      accounting: {
        manager: {
          name: "Charlie",
          salary: 85000,
        },
      },
    },
    itDepartment: {
      infrastructure: {
        server: {
          id: "S1",
          status: "active",
        },
      },
      development: {
        frontendTeam: {
          leadDeveloper: {
            name: "Diana",
            experience: "10 years",
          },
          juniorDeveloper: {
            name: "Eve",
            experience: "2 years",
          },
        },
      },
    },
  },
};
