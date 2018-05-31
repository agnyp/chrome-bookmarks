import React from "react";
import { shallow } from "enzyme";
import { Folder } from "./folder";

describe("Folder component", () => {
  test("Component exports its name", ()=>{
    expect(shallow(<Folder></Folder>)).toExist();
  });
});
