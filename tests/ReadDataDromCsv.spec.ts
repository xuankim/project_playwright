import { test } from "@playwright/test";
import fs from "fs";
import { parse } from "csv-parse/sync";

type UserRecord = {
  Id: number;
  Firstname: string;
  Lastname: string;
};
const records = parse(fs.readFileSync("testdata/data.csv"),{
    columns: true,
    skip_empty_lines: true,

}) as UserRecord[];



// records.forEach((record)=>{
//     test(`Get Data from CSV - ${record.Id}`, async ({page})=>{
//         test.setTimeout(60000);
//         // console.log(record.Firstname);
//         // console.log(record.Lastname);
//         await page.goto("https://demoqa.com/automation-practice-form");
//         await page.getByPlaceholder('First Name').fill(record.Firstname);
//         await page.getByPlaceholder('Last Name').fill(record.Lastname);
// })
// })

for(const record of records){
    test(`Get Data from CSV - ${record.Id}`, async ({page})=>{
        test.setTimeout(60000);
//          console.log(record.Firstname);
//         console.log(record.Lastname);
        await page.goto("https://demoqa.com/automation-practice-form");
        await page.getByPlaceholder('First Name').fill(record.Firstname);
        await page.getByPlaceholder('Last Name').fill(record.Lastname);
    })
}