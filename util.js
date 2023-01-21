import Airtable from "airtable";

export const base = new Airtable({
  apiKey: "b8217063-c100-4ba0-893c-dce1fbc562f7" //process.env.NEXT_PUBLIC_AIRTABLE_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE);
