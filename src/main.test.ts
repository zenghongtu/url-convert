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

  it("handler test", () => {
    const htmlString = `<div>
    <a href="/a"></a>
    <img src="/img" alt="" />
    <script src="/script"></script>
    <link rel="stylesheet" href="./link" />
  </div>
  `;
    const baseUrl = "https://zenghongtu.com";
    const handler = src => {
      return src + "?raw=true";
    };
    expect(urlConvert({ htmlString, baseUrl, handler })).toEqual(`<div>
    <a href="https://zenghongtu.com/a?raw=true"></a>
    <img src="https://zenghongtu.com/img?raw=true" alt="">
    <script src="https://zenghongtu.com/script?raw=true"></script>
    <link rel="stylesheet" href="https://zenghongtu.com/link?raw=true">
  </div>
  `);
  });
});
