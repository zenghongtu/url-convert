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
  handler?: () => void;
}

const urlConvert = ({ htmlString, baseUrl, handler }: IUrlConvert) => {
  const divContainer = document.createElement("div");
  divContainer.style.display = "none";
  divContainer.innerHTML = htmlString;

  const handleElSrc = (el: Element): void => {
    const src = el.getAttribute("src");
    if (src) {
      el.setAttribute("src", convert(baseUrl, src));
    }
  };

  const handleElHref = (el: Element): void => {
    const src = el.getAttribute("href");
    if (src) {
      el.setAttribute("href", convert(baseUrl, src));
    }
  };

  divContainer.querySelectorAll("img").forEach(handleElSrc);
  divContainer.querySelectorAll("script").forEach(handleElSrc);
  divContainer.querySelectorAll("a").forEach(handleElHref);
  divContainer.querySelectorAll("link").forEach(handleElHref);

  return divContainer.innerHTML;
};

export default urlConvert;
