const http = require("http");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res, next) => {
  res.send("home page");
});

app.get("/test", (req, res, next) => {
  res.send("test page");
});

app.get("/profiles", (req, res, next) => {
  let data = [
    {
      name: "Pauline Rivera",
      description:
        "HR specialist focused on talent acquisition and employee engagement.",
      role: "HR Specialist",
      linkedinId: "paulinerivera",
      profilePhoto: "https://example.com/photos/pauline.jpg",
      resume: "https://example.com/resumes/pauline.pdf",
      skills: [
        "Recruitment",
        "Employee Relations",
        "HR Policies",
        "Performance Management",
        "Onboarding",
      ],
    },
    {
      name: "Quincy Adams",
      description:
        "Financial analyst with expertise in financial modeling and data analysis.",
      role: "Financial Analyst",
      linkedinId: "quincyadams",
      profilePhoto: "https://example.com/photos/quincy.jpg",
      resume: "https://example.com/resumes/quincy.pdf",
      skills: [
        "Financial Modeling",
        "Data Analysis",
        "Excel",
        "Financial Reporting",
        "Budgeting",
      ],
    },
  ];
  res.json(data);
});
app.listen(3000, () => {
  console.log("Server running");
});
