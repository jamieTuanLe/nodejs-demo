const express = require("express");
const router = express.Router();
const listData = require("../../models/user/userInfo");
const _ = require('lodash');


router.get("/",(req, res) => {
    res.json(listData);
  });

router.post("/create",(req, res) => {
    const body = _.get(req, "body");

    listData.push({
      id: listData.length + 1,
      name: body.name,
      age: body.age,
      role: body.role,
    })

    res.json({ status: "Created success"});
  });

router.route("/:id")
  .get((req, res) => {
    const id = parseInt(req.params.id);
    res.json(listData.find((user) => user.id === id));
  })
  .post((req, res) => {
    const id = parseInt(req.params.id);
    const body = _.get(req, "body");

    const idx = listData.findIndex(user => user.id === id);
    if(idx !== -1) {
      listData.splice(idx, 1, {
        ...listData[idx],
        name: body.name,
        age: body.age,
      })
    }

    res.json(listData[idx]);
  })
  .delete((req, res) => {
    const id = parseInt(req.params.id);
    const idx = listData.findIndex(user => user.id === id);
    if(idx !== -1) {
      listData.splice(idx, 1)
      res.json("Delete success")
    }else {
      res.json("Id Not Found")
    }
  });

module.exports = router;
