const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("set office number using constructor argument",()=>{
    const off = 111;
    const mng = new Manager("sample",1,"sample@mail.com",mng);
    expect(mng.officenumber).toBe(mng);
});

test("getRole() should return \"Manager\"", () => {
    const val = "Manager";
    const e = new Manager("sample", 1, "sample@test.com","111");
    expect(e.getRole()).toBe(val);
  });

  test("get office number using get officenumber()",()=>{
    const off = 111;
    const mng = new Manager("sample",1,"sample@mail.com",mng);
    expect(mng.getofficenumber()).toBe(mng);
});