var school;

if (age < 13) {
  school = 'Elementary School';
}
if ((age >= 13) && (age <= 18)) {
school = 'High School';
}
if (age > 18) {
  school = 'Lighthouse Labs';
}
return school;
}

console.log(whichSchool(35));
};