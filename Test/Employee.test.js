const Employee=require("../lib/Employee")
test("Instantiate employee instance",()=>{
    const emp = new Employee();
    expect(typeof(emp)).toBe("obj");
    
});

test("set name using constructor argument",()=>{
    const name = "sample";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

test("Set id using constructor argument",()=>{
    const val = 1;
    const emp = new Employee("sample",val);
    expect(emp.id).toBe(val);
});

test("Set email using constructor argument",()=>{
    const mail = "sample@mail.com";
    const emp = new Employee("sample",1,mail);
    expect(emp.email).toBe(mail);
});
//Using method function

test("get name using getname()",()=>{
    const name = "sample";
    const emp = new Employee(name);
    expect(emp.getname()).toBe(name);
});

test("get id using getid()",()=>{
    const val = 1;
    const emp = new Employee("sample",val);
    expect(emp.getid()).toBe(val);
});

test("Set email using email()",()=>{
    const mail = "sample@mail.com";
    const emp = new Employee("sample",1,mail);
    expect(emp.getemail()).toBe(mail);
});
test("getRole() should return \"Employee\"", () => {
    const val = "Employee";
    const e = new Employee("sample", 1, "sample@test.com");
    expect(e.getRole()).toBe(val);
  });