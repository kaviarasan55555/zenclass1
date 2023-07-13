db.topics.find({ "month": "October" })
{
    _id: ObjectId("64b011a24468f6d817907807"),
    id: '1',
    name: 'Introduction to Programming',
    month: 'October',
    task_name: 'Task 1',
    task_month: 'October'
  }
  {
    _id: ObjectId("64b011a24468f6d817907808"),
    id: '2',
    name: 'Data Structures',
    month: 'October',
    task_name: 'Task 2',
    task_month: 'October'
  }
  {
    _id: ObjectId("64b011a24468f6d817907809"),
    id: '3',
    name: 'Algorithms',
    month: 'October',
    task_name: 'Task 3',
    task_month: 'October'
  }
  db.company_drives.find({
    $and: [
      { "drives_date": { $gte: "2020-10-15" } },
      { "drives_date": { $lte: "2020-10-31" } }
    ]
  })
  {
    _id: ObjectId("64b011a24468f6d817907800"),
    id: '1',
    name: 'Company Drive 1',
    drives_date: '2020-10-20'
  }
  {
    _id: ObjectId("64b011a24468f6d817907801"),
    id: '2',
    name: 'Company Drive 2',
    drives_date: '2020-10-28'
  }
  

  db.company_drives.aggregate([
    {
      $lookup: {
        from: "students",
        localField: "id",
        foreignField: "user_id",
        as: "students"
      }
    }
  ])
  {
    _id: ObjectId("64b0115a4468f6d8179077ec"),
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'student',
    problems_solved: 250,
    topics_and_tasks: '90%',
    students: []
  }
  {
    _id: ObjectId("64b0115a4468f6d8179077ed"),
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'student',
    problems_solved: 250,
    topics_and_tasks: '90%',
    students: []
  }
  {
    _id: ObjectId("64b011a24468f6d8179077ee"),
    id: '3',
    name: 'David Johnson',
    email: 'david.johnson@example.com',
    role: 'student',
    problems_solved: 250,
    topics_and_tasks: '90%',
    students: []
  }
  {
    _id: ObjectId("64b011a24468f6d8179077ef"),
    id: '4',
    name: 'Emily Brown',
    email: 'emily.brown@example.com',
    role: 'student',
    problems_solved: 250,
    topics_and_tasks: '90%',
    students: []
  }

  
  
  
  {
    _id: ObjectId("64b011a24468f6d8179077f2"),
    id: '7',
    name: 'Jacob Anderson',
    email: 'jacob.anderson@example.com',
    role: 'student',
    problems_solved: 250,
    topics_and_tasks: '90%',
    students: []
  }
  {
    _id: ObjectId("64b011a24468f6d8179077f3"),
    id: '8',
    name: 'Sophia Martinez',
    email: 'sophia.martinez@example.com',
    role: 'student',
    problems_solved: 250,
    topics_and_tasks: '90%',
    students: []
  }
  {
    _id: ObjectId("64b011a24468f6d8179077f4"),
    id: '9',
    name: 'William Lee',
    email: 'william.lee@example.com',
    role: 'student',
    problems_solved: 250,
    topics_and_tasks: '90%',
    students: []
  }

  {
    _id: ObjectId("64b011a24468f6d8179077f6"),
    id: '11',
    name: 'James Rodriguez',
    email: 'james.rodriguez@example.com',
    role: 'student',
    problems_solved: 250,
    topics_and_tasks: '90%',
    students: []
  }
  {
    _id: ObjectId("64b011a24468f6d8179077f7"),
    id: '12',
    name: 'Emma Taylor',
    email: 'emma.taylor@example.com',
    role: 'student',
    problems_solved: 255,
    topics_and_tasks: '90%',
    students: []
  }
  {
    _id: ObjectId("64b011a24468f6d8179077f8"),
    id: '13',
    name: 'Alexander White',
    email: 'alexander.white@example.com',
    role: 'student',
    problems_solved: 250,
    topics_and_tasks: '90%',
    students: []
  }
  {
    _id: ObjectId("64b011a24468f6d8179077f9"),
    id: '14',
    name: 'Ava Garcia',
    email: 'ava.garcia@example.com',
    role: 'student',
    problems_solved: 300,
    topics_and_tasks: '90%',
    students: []
  }
 


  db.students.aggregate([
    {
      $group: {
        _id: "$name",
        problems_solved: { $sum: "$problems_solved" }
      }
    }
  ])
  {
    _id: 'Benjamin Hernandez',
    problems_solved: 0
  }
  {
    _id: 'William Lee',
    problems_solved: 250
  }
  {
    _id: 'Mia Davis',
    problems_solved: 25
  }
  {
    _id: 'Olivia Taylor',
    problems_solved: 250
  }
  {
    _id: 'Ava Garcia',
    problems_solved: 300
  }
  {
    _id: 'James Rodriguez',
    problems_solved: 250
  }
  {
    _id: 'Emily Brown',
    problems_solved: 250
  }
  {
    _id: 'Charlotte Anderson',
    problems_solved: 0
  }
  {
    _id: 'Ethan Wilson',
    problems_solved: 65
  }
  {
    _id: 'John Doe',
    problems_solved: 250
  }
  {
    _id: 'Alexander White',
    problems_solved: 250
  }
  db.students.aggregate([
    {
      $group: {
        _id: null,
        totalProblemsSolved: { $sum: "$problems_solved" }
      }
    }
  ])
  {
    _id: null,
    totalProblemsSolved: 3637
  }
  db.mentors.find({ "mentee_count": { $gt: 15 } })
  {
    _id: ObjectId("64b011a24468f6d8179077fd"),
    id: '1',
    name: 'Charlotte Anderson',
    email: 'charlotte.anderson@example.com',
    role: 'mentor',
    mentee_count: 20
  }
  {
    _id: ObjectId("64b011a24468f6d8179077ff"),
    id: '2',
    name: 'Harper Davis',
    email: 'harper.davis@example.com',
    role: 'mentor',
    mentee_count: 20
  }
  db.attendance.find({
    $and: [
      { "date": { $gte: "2020-10-15" } },
      { "date": { $lte: "2020-10-31" } },
      { "status": "absent" }
    ]
  }).count()
  2