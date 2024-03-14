import express from "express";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));
app.use(express.json());
app.use(express.static("docs"));
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

let posts = [];

app.get("/posts", (req, res) => {
	axios
		.get("https://quotable.io/quotes?page=1&maxLength=140")
		.then((response) => {
			const newPosts = [...posts, ...response.data.results];
			res.status(200).json(newPosts);
		});
});

app.post("/post", (req, res) => {
	if (!req.body || !req.body.newPost) {
		res.status(400).send("Invalid data! Please, review the documentation.");
	} else {
		const { author, authorSlug, content, dateAdded } = req.body.newPost;
		if (
			!author ||
			!author.trim() ||
			!authorSlug ||
			!authorSlug.trim() ||
			!content ||
			!content.trim() ||
			!dateAdded ||
			!dateAdded.trim()
		) {
			res
				.status(400)
				.send(
					"Invalid data! At least one of the fields is empty or missing. Please, review the data that was sent."
				);
		} else {
			const newPost = { ...req.body.newPost, _id: uuidv4() };
			posts = [newPost, ...posts];
			res.status(201).json(newPost);
		}
	}

	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"));
	});
});
