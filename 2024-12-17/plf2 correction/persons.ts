import { readFileStr } from "https://deno.land/std@0.42.0/fs/mod.ts";
const data = await readFileStr("persons.csv", { encoding: "utf-8" });
const lines = data.split("\n");
for (const line of lines){
    const [firstName, lastName, gender, weight, height] = line.split('|');
    if (gender === 'female'){
        console.log(`${firstName} ${lastName} ist weiblich. Sie ist ${weight}kg schwer und ${height}m groß.`);
    }else {
        console.log(`${firstName} ${lastName} ist männlich. Er ist ${weight}kg schwer und ${height}m groß.`);
    }   
}
