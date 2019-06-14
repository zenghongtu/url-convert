import urlConvert from "./main";

describe("convert html", () => {
  it("base test", () => {
    const htmlString = `<div>
    <a href="/a"></a>
    <img src="/img" alt="" />
    <script src="/script"></script>
    <link rel="stylesheet" href="./link" />
  </div>
  `;
    const baseUrl = "https://zenghongtu.com";
    expect(urlConvert({ htmlString, baseUrl })).toEqual(`<div>
    <a href="https://zenghongtu.com/a"></a>
    <img src="https://zenghongtu.com/img" alt="">
    <script src="https://zenghongtu.com/script"></script>
    <link rel="stylesheet" href="https://zenghongtu.com/link">
  </div>
  `);
  });
});
