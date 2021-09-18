import {add} from "./index";

describe("Test add() function", () => {
    it("should return zero for empty string", () => {
        expect(add("")).toEqual(0);
    })
})