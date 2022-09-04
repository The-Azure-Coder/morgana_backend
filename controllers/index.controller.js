class IndexController {
  static index = (req, res) => {
    res.json({
      name: "Morgana Dental Clinic",
      version: "v0.1.0",
    });
  };
}

module.exports = IndexController;
