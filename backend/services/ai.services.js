const OpenAI = require("openai");
const dotenv = require("dotenv");
dotenv.config();

// Set up the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Function to generate a summary using OpenAI
const generateSummary = async (content) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Use "gpt-4" or another available model in your account
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that summarizes blog content.",
        },
        {
          role: "user",
          content: `Here is the blog content:\n\n${content}\n\nPlease provide a concise summary of this blog.`,
        },
      ],
      max_tokens: 50,
      temperature: 0.7,
    });

    // Return the generated summary
    return response.choices[0].message.content.trim();
  } catch (error) {
    // Enhanced error logging
    console.error(
      "Error generating summary:",
      error.response?.data || error.message
    );
    throw new Error("Summary generation failed");
  }
};

module.exports = {
  generateSummary,
};
