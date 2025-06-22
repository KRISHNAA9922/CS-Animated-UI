import * as contentstack from "contentstack";

// ✅ Initialize the Contentstack stack
const Stack = contentstack.Stack({
  api_key: "bltbd75938f4bc1e3f1", // Replace with your actual API key
  delivery_token: "cscb161bf27d3ce3bbdfea854a", // Delivery token (read-only)
  environment: "development", // ✅ Must match exactly with your Environment name in Contentstack
});

// ✅ Generic function to get all entries of a content type
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
        console.error("🚨 Error in getAllEntries:", error);
        reject(error);
      });
  });
};

export default Stack;
