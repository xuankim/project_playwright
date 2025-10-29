import {test} from "@playwright/test";
import { Console } from "console";

test.describe("Practice of Describe", async()=>{

    test("Practice Test 1", async ({page})=>{
        console.log("Starting Practice Test 1");
        console.log("Ending Practice Test 1");
    })

    test("Practice Test 2", async({page})=>{
        console.log("Starting Practice Test 2");
        console.log("Ending Practice Test 2");
    })
})