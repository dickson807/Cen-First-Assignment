const root = document.getElementById("root");
const daysOfTheWeek = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

const daysToHighlight = {
  10: [{ date: 23, class: "birthday" }],
  2: [{ date: 6, class: "birthday-2" }],
  4: [{ date: 14, class: "birthday-3" }],
  0: [{ date: 1, class: "holiday" }],
  11: [
    { date: 25, class: "holiday" },
    { date: 26, class: "holiday" },
  ],
  9: [{ date: 1, class: "holiday" }],
  1: [{ date: 14, class: "holiday" }],
};

const months = [
  ["January", 31],
  ["Feburary", 28],
  ["March", 31],
  ["April", 30],
  ["May", 31],
  ["June", 31],
  ["July", 31],
  ["August", 31],
  ["September", 30],
  ["October", 31],
  ["November", 30],
  ["December", 31],
];
const calendar = document.createElement("div");
calendar.className = "calendar";

months.forEach(function ([month, numOfDays], monthIndex) {
  const monthTitle = document.createElement("h2");
  monthTitle.className = "month-title";

  const monthHeading = getHeading();

  const monthBody = getBody(numOfDays, monthIndex);

  const monthdiv = document.createElement("div");
  monthdiv.className = "month";

  monthTitle.innerText = month;
  monthdiv.append(monthTitle, monthHeading, monthBody);
  calendar.append(monthdiv);
});
function getHeading() {
  const monthHeading = document.createElement("div");
  monthHeading.className = "month-heading month-grid";

  daysOfTheWeek.forEach((day) => {
    const dayElement = document.createElement("h3");
    dayElement.innerText = day;
    dayElement.className = "month-col";
    monthHeading.append(dayElement);
  });
  return monthHeading;
}
function getBody(numOfDays, monthIndex) {
  const monthBody = document.createElement("div");
  monthBody.className = "month-body month-grid";
  addBlanks(monthIndex, monthBody);

  const specialDay = daysToHighlight[monthIndex] || [];
  for (i = 1; i <= numOfDays; i++) {
    const p = document.createElement("p");
    p.innerText = i;
    const highlight = specialDay.find((d) => d.date === i);

    if (highlight) {
      p.className = highlight.class;
    }

    monthBody.append(p);
  }
  return monthBody;
}
function addBlanks(monthIndex, monthBody) {
  const date = new Date(2023, monthIndex, 1);
  const firstDay = (date.getDay() + 6) % 7;

  for (let i = 0; i < firstDay; i++) {
    const blank = document.createElement("p");
    blank.className = "month-col";
    monthBody.append(blank);
  }
}
root.appendChild(calendar);
