const mongoose = require("mongoose");
const Book = require("../models/book");

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    family: 4 // Use IPv4, skip trying IPv6
  }
);

const booksSeed = [
  {
    authors: [""],
    _id: "",
    googleId: "",
    title: "",
    subtitle: "",
    link:
      "",
    description: "",
    image:
      ""
  },
  {
    authors: [""],
    _id: "",
    googleId: "",
    title: "",
    subtitle: "",
    link:
      "",
    description: "",
    image:
      ""
  },
  {
    authors: [""],
    _id: "",
    googleId: "",
    title: "",
    subtitle: "",
    link:
      "",
    description: "",
    image:
      ""
  },
  {
    authors: [""],
    _id: "",
    googleId: "",
    title: "",
    subtitle: "",
    link:
      "",
    description: "",
    image:
      ""
  }
];

async function seed() {
  await mongoose
    .connect(
      MONGODB_URI,
      options
    )
    .then(() => {
      console.log("Seed: Connected to Database");
    })
    .catch(err => {
      console.log("Seed: Not Connected to Database ERROR! ", err);
    });
  for (let book of booksSeed) {
    const { _id: bookId } = await new Book({
      title: book.title,
      subtitle: book.subtitle,
      authors: book.authors,
      link: book.link,
      description: book.description,
      image: book.image,
      googleId: book.googleId
    }).save();
  }

  mongoose.disconnect();

  console.info("Seed: Done!");
}

seed();
