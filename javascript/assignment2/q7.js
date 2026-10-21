// Analyze the review text for word count and negative keywords.
const feedback =
  "Great product! Fast delivery and amazing sound quality!";
const feedbackWords = feedback.trim().split(/\s+/);
const normalizedFeedback = feedback.toLowerCase();
const containsNegativeFeedback =
  normalizedFeedback.includes("bad") || normalizedFeedback.includes("poor");

console.log(`Word count: ${feedbackWords.length}`);

if (!containsNegativeFeedback) {
  console.log("Positive Feedback");
} else {
  console.log("Needs Improvement");
}
