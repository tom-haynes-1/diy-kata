const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    const employees = [
      { name: "Tom", role: "Developer" },
      { name: "Jenny", role: "Sales Associate" },
      { name: "Joe", role: "Director" }
    ];
    expect(getEmployerRole("Tom", employees)).toBe("Developer");
    expect(getEmployerRole("Jenny", employees)).toBe("Sales Associate");
    expect(getEmployerRole("Joe", employees)).toBe("Director");
  });
});
