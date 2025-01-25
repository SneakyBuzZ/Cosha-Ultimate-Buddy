import { GoogleGenerativeAI } from "@google/generative-ai";
import { CommitType } from "./types/github.types";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateSummaryForCommit = async (commit: CommitType) => {
  const summary = await model.generateContent(
    `
          As a Senior Software Engineer reviewing a git commit diff, provide a clear and concise summary of the changes in no more than three lines. Focus on the key modifications, such as added, modified, or removed functionality, and ensure the summary is easy to understand. Also include the information about what files has been udpated and the link to the diff and where is the file according to the path.Dont suggest any links for futher info.
        
          Git Diff:
          ${commit.url + ".diff"}
    `
  );

  if (!summary.response || !summary.response.candidates) {
    return commit;
  }

  return {
    ...commit,
    summary: summary.response.candidates[0].content.parts[0].text,
  };
};
