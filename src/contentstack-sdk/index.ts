import * as contentstack from "contentstack";

const apiKey = process.env.CONTENTSTACK_API_KEY;
const deliveryToken = process.env.CONTENTSTACK_DELIVERY_TOKEN;
const environment = process.env.CONTENTSTACK_ENVIRONMENT;

if (!apiKey || !deliveryToken || !environment) {
  throw new Error("cheack APIs is not working");
}

const Stack = contentstack.Stack({
  api_key: apiKey,
  delivery_token: deliveryToken,
  environment: environment,
});

export const getAllEntries = (contentTypeUid: string): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const Query = Stack.ContentType(contentTypeUid).Query();
    Query
      .includeCount()
      .toJSON()
      .find()
      .then(([entries]) => {
        resolve(entries);
      })
      .catch((error) => {
        console.error("Error in getAllEntries:", error);
        reject(error);
      });
  });
};

export default Stack;
