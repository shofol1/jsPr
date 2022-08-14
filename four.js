//  ->underscoreCase
// underscore_case
//  first_name
// Some_Variable
//  calculate_AGE🧑🏻‍🏫
// delayed_departure

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅ ".repeat(i + 1)}`);
  }
});
