import queryString from "query-string";

let isPreventUserNavigate = false;

export const navigate = ({ page, params = null }) => {
  if (isPreventUserNavigate) return;
  isPreventUserNavigate = true;

  my.navigateTo({
    url: `${queryString.stringifyUrl({
      url: `pages/${page}/index`,
      query: params,
    })}`,
  });

  setTimeout(() => {
    isPreventUserNavigate = false;
  }, 200);
};

export const switchTab = ({ page, params = null }) => {
  my.switchTab({
    url: `${queryString.stringifyUrl({
      url: `pages/${page}/index`,
      query: params,
    })}`,
  });
};

export const parseQuery = (query) => {
  return queryString.parse(query);
};
