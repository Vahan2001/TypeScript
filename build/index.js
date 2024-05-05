"use strict";
const companyStructure = {
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
