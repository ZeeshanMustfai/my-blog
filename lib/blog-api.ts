import fs from "fs";
import { join } from "path";
import matter from "gray-matter"
const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlug() {
  return fs.readdirSync(postsDirectory)
}


export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(postsDirectory, `${realSlug}.md`);

  const fileContent = fs.readFileSync(fullPath, 'utf-8')
  const {data, content} = matter(fileContent)

  return {slug: realSlug, content, data}
}

export function getAllPosts(){
  const slugs = getPostSlug()
  const posts = slugs.map((slug) => getPostBySlug(slug)).sort((post1, post2) => new Date(post1.data.date) > new Date(post2.data.date) ? -1 : 1)

  return posts
}