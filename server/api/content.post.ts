export default defineEventHandler(async (event) => {
  const { content } = getQuery(event);
  const config = useRuntimeConfig();
  const { space, token } = await readBody(event);
  // const spaceid = config.contentfulSpace;
  // const token = config.contentfulToken;
  const url = "https://cdn.contentful.com";

  const path = `/spaces/${space}/environments/master/content_types/${content}&access_token=${token}`;
  const response = await fetch(`${url}${path}`, {
    method: "GET",
    headers: {
      authorization: token,
    },
  });

  const data = await response.json();
  return {
    token,
    space,
    data,
  };
});
