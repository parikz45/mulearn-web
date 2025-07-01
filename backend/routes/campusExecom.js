const router = require("express").Router();
const member = require("../models/CampusExecom");

// add a member
router.post("/:id/execom", async (req, res) => {
    try {
        if (!req.body.name || !req.body.role || !req.body.muid ) {
            return res.status(400).json("All fields are required");
        }
        const Member = new member(req.body);
        const newMember = await Member.save();
        res.status(200).json(newMember);
    } catch (err) {
        res.status(500).json(err);
    }
})

// view execom
router.get("/:id/execom", async (req, res) => {
    try {
        const execom = await member.findById({campusId:req.params.id});
        res.status(200).json(execom);

    } catch (err) {
        res.status(500).json(err);
    }
})

// delete a member
router.delete("/:id/execom/:muid", async (req, res) => {
    try {
        const deleted = await member.findOneAndDelete({ muid: req.params.muid });
        if (!deleted) {
            res.status(404).json("Member not found");
        }
        res.status(200).json("Member deleted successfully");
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;