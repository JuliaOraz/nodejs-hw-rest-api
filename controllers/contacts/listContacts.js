const { Contact } = require("../../models/contacts");

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;
  // const { favorite} = req.query;
  // console.log(favorite);
  // const filter =

  const skip = (page - 1) * limit;

  if (favorite) {
    const result = await Contact.find({ owner, favorite }, null, {
      skip,
      limit,
    }).populate("owner", "subscription email");
    res.json(result);
  }

  const result = await Contact.find({ owner }, null, {
    skip,
    limit,
  }).populate("owner", "subscription email");

  res.json(result);
};

module.exports = listContacts;

//  $or: [{ favorite: { $in: favorite } }],
