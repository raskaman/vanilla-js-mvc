describe("app", function() {
  it("is not undefined", function() {
    expect(app).not.toBeUndefined();
  });

  it("controller, model and view are not undefined", function() {
    expect(app.model).not.toBeUndefined();
    expect(app.view).not.toBeUndefined();
    expect(app.controller).not.toBeUndefined();
  });


});