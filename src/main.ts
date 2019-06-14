const urlJoin = (baseUrl: string, appendUrl: string) => {
  const isStartSplash = appendUrl.startsWith("/") || appendUrl.startsWith("./");
  if (isStartSplash) {
    appendUrl = appendUrl.slice(
      appendUrl.indexOf("/") + 1 || appendUrl.indexOf("./") + 1
    );
  }
  return `${baseUrl}/${appendUrl}`;
};

const convert = (baseUrl: string, currentUrl: string): string => {
  if (
    !currentUrl ||
    /^(https?|file|ftps?|mailto|javascript|data:image\/[^;]{2,9};):/i.test(
      currentUrl
    )
  ) {
    return currentUrl;
  }
  return urlJoin(baseUrl, currentUrl);
};

export interface IUrlConvert {
  htmlString: string;
  baseUrl: string;
  handler?: (nextSrc: string) => string;
}

const urlConvert = ({ htmlString, baseUrl, handler }: IUrlConvert) => {
  const divContainer = document.createElement("div");
  divContainer.style.display = "none";
  divContainer.innerHTML = htmlString;

  const handleElSrc = (attr: string) => (el: Element): void => {
    const src = el.getAttribute(attr);
    if (src) {
      let _src = convert(baseUrl, src);
      if (handler) {
        _src = handler(_src);
      }
      el.setAttribute(attr, _src);
    }
  };

  divContainer.querySelectorAll("img").forEach(handleElSrc("src"));
  divContainer.querySelectorAll("script").forEach(handleElSrc("src"));
  divContainer.querySelectorAll("a").forEach(handleElSrc("href"));
  divContainer.querySelectorAll("link").forEach(handleElSrc("href"));

  return divContainer.innerHTML;
};

export default urlConvert;
