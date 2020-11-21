const mongoose = require("mongoose");
const Teachers = require("../models/teachers");
const { teacherValidation } = require("../Validations/Validations");

const addTeachers = async (req, res) => {
  const { error } = teacherValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const teacher = new Teachers({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    class: req.body.class,
    teacher_id: req.body.teacher_id,
  });
  try {
    const savedTeacher = await teacher.save();
    res.send(savedTeacher);
  } catch (err) {
    res.status(400).send(err);
  }
};

const getTeachers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 3;
    const sortingData = (req.query.sort = "asc" ? 1 : sort === "desc" ? -1 : 0);

    let filterationData;
    if (req.query.gender === "male") {
      filterationData = "male";
    } else if (req.query.gender === "female") {
      filterationData = "female";
    } else {
      filterationData = null;
    }
          // const filterationData =
          //   req.query.gender === "female"
          //     ? "female"
          //     : req.query.gender === "male"
          //     ? "male"
          //     : null;

    const id = req.query.teacher_id;
    // console.log(id);
    // const teachers = await Teachers.find({ teacher_id: id });
    // res.status(200).send(teachers);

    const queryData = {
      teacher_id: req.query.teacher_id
    };

    if (filterationData) {
      queryData["gender"] = filterationData;
    }

    let teacherData = await Teachers.find(queryData)
      .sort({ age: sortingData })
      .skip((page - 1) * limit)
        .limit(limit);
console.log(teacherData)
    const count = await Teachers.countDocuments(queryData).exec();
    const total = Math.ceil(count / limit);
    res.status(200).json({ teacherData, count, total, page, limit });
  } catch (err) {
    res.status(400).send(err);
  }
    
};
const teacherDetails = async (req, res) => {
  try {
    const teachers = await Teachers.find(query);
    const name = req.query.name.toLowerCase();
    const query = {
      teacher_id: mongoose.Types.ObjectId(req.query.teacher_id),
    };

    let temp = teachers.filter((item) =>
      item.name.toLowerCase().includes(name)
    );
    res.send(temp);
  } catch (err) {
    res.status(400).send(err);
  }
};

const updateTeacher = async (req, res) => {
  Teachers.findById(req.params.id)
    .then((teach) => {
      (teach.name = req.body.name),
        (teach.gender = req.body.gender),
        (teach.age = req.body.age),
        (teach.class = req.body.class);
      teach
        .save()
        .then(() => res.json("Teacher Information  Updated!"))
        .catch((err) => res.status(400).send(err));
    })
    .catch((err) => res.status(400).send(err));
};

const removeTeacher = async (req, res) => {
  const id = req.params.id;
  Teachers.findByIdAndDelete(id)
    .then(() => res.json("Teacher deleted Successfully!"))
    .catch((err) => res.status(400).send(err));
};

module.exports = {
  getTeachers,
  teacherDetails,
  updateTeacher,
  removeTeacher,
  addTeachers,
};
