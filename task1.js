let developer = {
  name: "Ahmed",

  birthYear: 1992,

  skills: ["PhotoShop", "HTML", "CSS", "JS"],

  getAge: function () {
    const today = new Date();

    currentYear = today.getFullYear();

    return currentYear - this.birthYear;
  },

  newSkills: ["ES6", "ES7", "ES😎"],

  mySkills: function () {
    [this.designSkills, ...this.devSkills] = this.skills;
    devSkills = [...this.devSkills, ...this.newSkills];
    return devSkills;
  },
};

console.log(developer.mySkills());
console.log(developer.getAge());
