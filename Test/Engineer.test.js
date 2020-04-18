const eng = require("../lib/Engineer");

test("set github using constructor argument",()=>{
    const gitname = "githubprofile";
    const eng = new Engineer("sample",1,"sample@mail.com",gitname);
    expect(eng.gitname).toBe(eng);
});

test("getRole() should return \"Engineer\"", () => {
    const val = "Engineer";
    const e = new Engineer("sample", 1, "sample@test.com","githubname");
    expect(e.getRole()).toBe(val);
  });

  test("get github using github()",()=>{
    const gn = "githubprofile";
    const eng = new Engineer("sample",1,"sample@mail.com","gitname");
    expect(eng.getRole()).toBe(gn);
});