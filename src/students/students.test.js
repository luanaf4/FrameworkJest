const student = require("./students");

describe("Teste ", () => {
  it("Se o aluno tiver as notas 5, 3 e 2, sua nota final deve ser 10", () => {
    const notes = [5, 3, 2];
    expect(student.sum(notes)).toEqual(10);
  });

  it("Se o aluno tiver alguma nota 0, sua nota final será 0", () => {
    const notes = [9, 6, 3, 0, 1];
    expect(student.sum(notes)).toEqual(0);
  });
  it("Se o aluno tiver mais de 5 notas, sua nota final será dobrada", () =>{
    const notes = [9,5,3,6,8,2]
    expect(student.sum(notes)).toEqual(66);
  })
});
