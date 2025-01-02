const { script } = require("../script");

beforeAll(() =>{
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});
describe("game object contains correct keys", ()=>{
    test("score key exists", () => {
        expect("score" in script).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in script).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in script).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in script).toBe(true);
    });
    test("choices contain correct ids", () => {
        expect(script.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
    
});

